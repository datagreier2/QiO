import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { supportedLanguages, translations } from './translations.js'

const HOME_PATH = '/'
const SHOW_CERTIFICATION = false

function normalisePath(path) {
  if (!path) {
    return HOME_PATH
  }

  const trimmed = path.replace(/\/+$/, '')
  return trimmed === '' ? HOME_PATH : trimmed
}

const certificationSlugByLanguage = supportedLanguages.reduce(
  (accumulator, { code }) => {
    accumulator[code] = translations[code].certification.slug
    return accumulator
  },
  {},
)

const certificationPaths = new Set(
  Object.values(certificationSlugByLanguage).map((slug) => normalisePath(slug)),
)

const membershipSlugByLanguage = supportedLanguages.reduce(
  (accumulator, { code }) => {
    accumulator[code] = translations[code].membership.slug
    return accumulator
  },
  {},
)

const membershipPaths = new Set(
  Object.values(membershipSlugByLanguage).map((slug) => normalisePath(slug)),
)

const paymentSlugByLanguage = supportedLanguages.reduce(
  (accumulator, { code }) => {
    accumulator[code] = translations[code].payment.slug
    return accumulator
  },
  {},
)

const paymentPaths = new Set(
  Object.values(paymentSlugByLanguage).map((slug) => normalisePath(slug)),
)

function getLanguageForPath(path) {
  const target = normalisePath(path)
  const certificationMatch = Object.entries(certificationSlugByLanguage).find(
    ([, slug]) => normalisePath(slug) === target,
  )

  if (certificationMatch) {
    return certificationMatch[0]
  }

  const membershipMatch = Object.entries(membershipSlugByLanguage).find(
    ([, slug]) => normalisePath(slug) === target,
  )

  if (membershipMatch) {
    return membershipMatch[0]
  }

  const paymentMatch = Object.entries(paymentSlugByLanguage).find(
    ([, slug]) => normalisePath(slug) === target,
  )

  return paymentMatch?.[0]
}

function App() {
  const [pathname, setPathname] = useState(() =>
    normalisePath(window.location.pathname),
  )
  const [language, setLanguage] = useState(
    () => getLanguageForPath(window.location.pathname) ?? 'nb',
  )
  const [showMembershipPrompt, setShowMembershipPrompt] = useState(() =>
    certificationPaths.has(normalisePath(window.location.pathname)),
  )
  const [overlayMembershipConfirmed, setOverlayMembershipConfirmed] =
    useState(false)
  const [overlayError, setOverlayError] = useState('')
  const [showEnrollment, setShowEnrollment] = useState(false)
  const [enrollmentEmail, setEnrollmentEmail] = useState('')
  const [enrollmentError, setEnrollmentError] = useState('')
  const [showVerification, setShowVerification] = useState(false)
  const [verificationPlace, setVerificationPlace] = useState('')
  const [verificationError, setVerificationError] = useState('')
  const [activeModule, setActiveModule] = useState(null)
  const courseContentRef = useRef(null)
  const [selectedMembershipCategory, setSelectedMembershipCategory] =
    useState(null)
const [selectedPaymentOptionId, setSelectedPaymentOptionId] = useState(null)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [sectionConfirmations, setSectionConfirmations] = useState({})
  const [quizSelections, setQuizSelections] = useState({})
  const [quizStatus, setQuizStatus] = useState({ success: false, message: '' })
  const closeNav = useCallback(() => setIsNavOpen(false), [])
  const [paymentFirstName, setPaymentFirstName] = useState('')
  const [paymentLastName, setPaymentLastName] = useState('')
  const [paymentPhone, setPaymentPhone] = useState('')
  const [paymentEmail, setPaymentEmail] = useState('')
  const [paymentConsent, setPaymentConsent] = useState(false)

  const copy = useMemo(() => translations[language], [language])
  const activeLocale =
    supportedLanguages.find(({ code }) => code === language)?.locale ?? 'nb-NO'
  const year = new Date().getFullYear()
  const email = copy.info.email
  const isCertificationPage = certificationPaths.has(pathname)
  const certificationCopy = isCertificationPage ? copy.certification : null
  const isMembershipPage = membershipPaths.has(pathname)
  const membershipCopy = isMembershipPage ? copy.membership : null
  const isPaymentPage = paymentPaths.has(pathname)
  const paymentCopy = isPaymentPage ? copy.payment : null
  const membershipSections = membershipCopy?.sections ?? []
  const membershipCategoryOptions = useMemo(() => {
    if (!membershipCopy) {
      return []
    }
    const labels = membershipCopy.categories ?? {}
    const seen = new Set()
    return membershipSections.reduce((accumulator, section) => {
      if (!section.category || seen.has(section.category)) {
        return accumulator
      }
      const label =
        labels[section.category] ?? section.heading ?? section.category
      if (label) {
        accumulator.push({ category: section.category, label })
        seen.add(section.category)
      }
      return accumulator
    }, [])
  }, [membershipCopy, membershipSections])
  const orderedMembershipSections = useMemo(() => {
    if (!membershipCopy || !selectedMembershipCategory) {
      return membershipSections
    }
    const index = membershipSections.findIndex(
      (section) => section.category === selectedMembershipCategory,
    )
    if (index === -1) {
      return membershipSections
    }
    const selectedSection = membershipSections[index]
    const remaining = membershipSections.filter((_, idx) => idx !== index)
    return [selectedSection, ...remaining]
  }, [membershipCopy, membershipSections, selectedMembershipCategory])
  const showLessonTopbar =
    showEnrollment || showVerification || Boolean(activeModule)
  const moduleSequence = useMemo(() => {
    if (!certificationCopy?.modules?.items) {
      return []
    }

    return certificationCopy.modules.items
      .map(({ code }) => code)
      .filter(Boolean)
  }, [certificationCopy])
  const activeLesson =
    activeModule && certificationCopy?.lessons
      ? certificationCopy.lessons[activeModule]
      : null
  const hasMultipleChoice = Boolean(activeLesson?.multipleChoice?.length)
  const requiredLessonSections = useMemo(() => {
    if (!activeLesson?.sections || !activeModule) {
      return []
    }
    return activeLesson.sections
      .map((section, index) =>
        section?.confirmRequired
          ? {
              key: `${activeModule}-section-${index}`,
              label: section.confirmLabel ?? 'Lest',
            }
          : null,
      )
      .filter(Boolean)
  }, [activeLesson, activeModule])
  const allSectionConfirmationsMet = useMemo(() => {
    if (!requiredLessonSections.length) {
      return true
    }
    return requiredLessonSections.every(({ key }) => sectionConfirmations[key])
  }, [requiredLessonSections, sectionConfirmations])
  const membershipSlug = copy.membership?.slug ?? HOME_PATH
  const certificationSlug = copy.certification?.slug ?? HOME_PATH
  const paymentSlug = copy.payment?.slug ?? HOME_PATH
  const navCopy = {
    certification: copy.nav?.certification ?? 'Sertifisering',
    about: copy.nav?.about ?? 'Om oss',
    membership:
      copy.nav?.membership ?? copy.hero.primaryCta ?? 'Bli medlem',
    donation: copy.nav?.donation ?? 'Donasjon',
    toggleLabel: copy.nav?.toggleLabel ?? 'Meny',
    home: copy.nav?.home ?? 'Til forsiden',
  }

  useEffect(() => {
    document.documentElement.setAttribute('lang', activeLocale)
  }, [activeLocale])

  useEffect(() => {
    const current = normalisePath(window.location.pathname)
    if (current !== window.location.pathname) {
      window.history.replaceState({}, '', current)
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      const newPath = normalisePath(window.location.pathname)
      setPathname(newPath)

      const matchedLanguage = getLanguageForPath(newPath)

      if (matchedLanguage) {
        setLanguage((previous) =>
          previous === matchedLanguage ? previous : matchedLanguage,
        )
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (certificationPaths.has(pathname)) {
      setShowMembershipPrompt(true)
      setOverlayMembershipConfirmed(false)
      setOverlayError('')
    } else {
      setShowMembershipPrompt(false)
      setActiveModule(null)
      setShowEnrollment(false)
      setEnrollmentEmail('')
      setEnrollmentError('')
      setShowVerification(false)
      setVerificationPlace('')
      setVerificationError('')
      setOverlayMembershipConfirmed(false)
      setOverlayError('')
      setSelectedMembershipCategory(null)
      setSectionConfirmations({})
      setQuizSelections({})
      setQuizStatus({ success: false, message: '' })
    }
  }, [pathname])

  useEffect(() => {
    closeNav()
  }, [pathname, closeNav])

  useEffect(() => {
    closeNav()
  }, [language, closeNav])

  useEffect(() => {
    if (membershipCopy) {
      setSelectedMembershipCategory(null)
    }
  }, [membershipCopy])

  useEffect(() => {
    setSectionConfirmations({})
    setQuizSelections({})
    setQuizStatus({ success: false, message: '' })
  }, [activeModule, certificationCopy])
  useEffect(() => {
    if (paymentCopy?.overview?.options?.length) {
      setSelectedPaymentOptionId(paymentCopy.overview.options[0]?.id ?? null)
    } else {
      setSelectedPaymentOptionId(null)
    }
    setPaymentFirstName('')
    setPaymentLastName('')
    setPaymentPhone('')
    setPaymentEmail('')
    setPaymentConsent(false)
  }, [paymentCopy])
  const navigate = useCallback(
    (path) => {
      const target = normalisePath(path)
      if (target === pathname) {
        return
      }

      window.history.pushState({}, '', path)
      setPathname(target)
    },
    [pathname],
  )

  const handleNavToggle = useCallback(() => {
    setIsNavOpen((previous) => !previous)
  }, [])

  const handleLogoClick = useCallback(
    (event) => {
      event.preventDefault()
      closeNav()
      if (pathname !== HOME_PATH) {
        navigate(HOME_PATH)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    [closeNav, navigate, pathname],
  )

  const handleCertificationNavClick = useCallback(
    (event) => {
      event.preventDefault()
      closeNav()
      navigate(certificationSlug)
    },
    [closeNav, navigate, certificationSlug],
  )

  const handleMembershipNavClick = useCallback(
    (event) => {
      event.preventDefault()
      closeNav()
      navigate(membershipSlug)
    },
    [closeNav, navigate, membershipSlug],
  )

  const handleAboutNavClick = useCallback(
    (event) => {
      event.preventDefault()
      closeNav()
      const scrollToInfo = () => {
        const infoSection = document.getElementById('info')
        if (infoSection) {
          infoSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      if (pathname !== HOME_PATH) {
        navigate(HOME_PATH)
        window.setTimeout(scrollToInfo, 200)
      } else {
        scrollToInfo()
      }
    },
    [closeNav, navigate, pathname],
  )

  const handleLanguageChange = useCallback(
    (event) => {
      closeNav()
      const nextLanguage = event.target.value
      setLanguage(nextLanguage)
      setEnrollmentError('')
      setVerificationError('')

      if (isCertificationPage) {
        const targetSlug = certificationSlugByLanguage[nextLanguage]
        if (targetSlug) {
          navigate(targetSlug)
        }
        return
      }

      if (isMembershipPage) {
        const targetSlug = membershipSlugByLanguage[nextLanguage]
        if (targetSlug) {
          navigate(targetSlug)
        }
        return
      }

      if (isPaymentPage) {
        const targetSlug = paymentSlugByLanguage[nextLanguage]
        if (targetSlug) {
          navigate(targetSlug)
        }
        return
      }
    },
    [
      closeNav,
      isCertificationPage,
      certificationSlugByLanguage,
      navigate,
      isMembershipPage,
      membershipSlugByLanguage,
      isPaymentPage,
      paymentSlugByLanguage,
    ],
  )

  const topNavigation = (
    <header className={`topnav${isNavOpen ? ' is-open' : ''}`}>
      <div className="topnav-inner">
        <a
          className="topnav-logo"
          href={HOME_PATH}
          aria-label={navCopy.home}
          onClick={handleLogoClick}
        >
          <img src="/qio_logo.svg" alt="Quiz i Oslo logo" />
        </a>
        <button
          type="button"
          className="topnav-toggle"
          aria-label={navCopy.toggleLabel}
          aria-expanded={isNavOpen}
          aria-controls="topnav-links"
          onClick={handleNavToggle}
        >
          <span className="topnav-toggle-icon" />
        </button>
        <nav className="topnav-links" id="topnav-links">
          {SHOW_CERTIFICATION && (
            <a
              className="topnav-link"
              href={certificationSlug}
              onClick={handleCertificationNavClick}
            >
              {navCopy.certification}
            </a>
          )}
          <a
            className="topnav-link"
            href="#info"
            onClick={handleAboutNavClick}
          >
            {navCopy.about}
          </a>
          <a
            className="topnav-link"
            href={`${membershipSlug}?category=donation`}
            onClick={(event) => {
              event.preventDefault()
              closeNav()
              setSelectedMembershipCategory('donation')
              navigate(membershipSlug)
              window.requestAnimationFrame(() => {
                const donationCard = document.querySelector(
                  '[data-membership-category="donation"]',
                )
                donationCard?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              })
            }}
          >
            {navCopy.donation}
          </a>
          <div className="language-switcher topnav-language">
            <label className="visually-hidden" htmlFor="topnav-language-select">
              {copy.languageLabel}
            </label>
            <select
              id="topnav-language-select"
              value={language}
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map(({ code }) => (
                <option key={code} value={code}>
                  {copy.languageNames[code]}
                </option>
              ))}
            </select>
          </div>
          <a
            className="button button-primary topnav-cta"
            href={membershipSlug}
            onClick={handleMembershipNavClick}
          >
            {navCopy.membership}
          </a>
        </nav>
      </div>
    </header>
  )

  const dismissOverlay = useCallback(() => {
    setShowMembershipPrompt(false)
    setOverlayMembershipConfirmed(false)
    setOverlayError('')
  }, [])

  const handleStartCourse = () => {
    setShowMembershipPrompt(false)
    setEnrollmentError('')
    setVerificationError('')
    setShowEnrollment(true)
    setShowVerification(false)
    setVerificationPlace('')
    setActiveModule(null)
    setSectionConfirmations({})
    window.requestAnimationFrame(() => {
      courseContentRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const handleOverlayConfirm = useCallback(() => {
    setShowMembershipPrompt(false)
    setOverlayError('')
    setOverlayMembershipConfirmed(true)
  }, [])

  const handleOverlayNavigate = useCallback(
    (target) => {
      setShowMembershipPrompt(false)
      setOverlayError('')
      navigate(target)
    },
    [navigate],
  )

  const handleSectionConfirm = useCallback((key) => {
    setSectionConfirmations((previous) => {
      if (previous[key]) {
        return previous
      }
      return { ...previous, [key]: true }
    })
  }, [])

  const handleQuizOptionToggle = useCallback(
    (questionKey, optionIndex) => {
      if (quizStatus.success) {
        return
      }
      setQuizSelections((previous) => {
        const current = new Set(previous[questionKey] ?? [])
        if (current.has(optionIndex)) {
          current.delete(optionIndex)
        } else {
          current.add(optionIndex)
        }
        return {
          ...previous,
          [questionKey]: Array.from(current).sort((a, b) => a - b),
        }
      })
    },
    [quizStatus.success],
  )

  const handleQuizSubmit = useCallback(() => {
    if (!activeLesson?.multipleChoice) {
      return
    }

    const allCorrect = activeLesson.multipleChoice.every((question, index) => {
      const questionKey = question.id ?? `${activeModule}-mc-${index}`
      const selected = new Set(quizSelections[questionKey] ?? [])
      const options = question.options ?? []
      const correctIndexes = options
        .map((option, optionIndex) =>
          typeof option === 'object' && option?.correct ? optionIndex : null,
        )
        .filter((value) => value !== null)

      if (!correctIndexes.length) {
        return false
      }

      if (selected.size !== correctIndexes.length) {
        return false
      }

      return Array.from(selected).every((choice) => {
        const option = options[choice]
        return (
          correctIndexes.includes(choice) &&
          typeof option === 'object' && option?.correct === true
        )
      })
    })

    if (allCorrect) {
      setQuizStatus({
        success: true,
        message:
          activeLesson.successMessage ??
          'Gratulerer! Du bestod eksamen.',
      })
    } else {
      setQuizStatus({
        success: false,
        message:
          activeLesson.failureMessage ??
          'Sjekk svarene dine og prøv igjen.',
      })
    }
  }, [activeLesson, activeModule, quizSelections])

  const canProceedToNext = allSectionConfirmationsMet && (!hasMultipleChoice || quizStatus.success)

  const handleEnrollmentSubmit = (event) => {
    event.preventDefault()
    const trimmedEmail = enrollmentEmail.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(trimmedEmail)) {
      if (certificationCopy) {
        setEnrollmentError(certificationCopy.enrollment.error)
      }
      return
    }

    setEnrollmentError('')
    setShowEnrollment(false)
    setShowVerification(true)
    setVerificationError('')
    window.requestAnimationFrame(() => {
      courseContentRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const handleVerificationSubmit = (event) => {
    event.preventDefault()
    const trimmedPlace = verificationPlace.trim()
    if (trimmedPlace.length < 3) {
      if (certificationCopy) {
        setVerificationError(certificationCopy.verification.error)
      }
      return
    }

    setVerificationError('')
    setShowVerification(false)
    setShowEnrollment(false)
    setSectionConfirmations({})
    setActiveModule('1.1')
    window.requestAnimationFrame(() => {
      courseContentRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const renderParagraphWithEmail = (text, key) => {
    const [beforeEmail, afterEmail] = text.split('{email}')
    if (afterEmail === undefined) {
      return <p key={key}>{text}</p>
    }

    return (
      <p key={key}>
        {beforeEmail}
        <a href={`mailto:${email}`}>{email}</a>
        {afterEmail}
      </p>
    )
  }

  if (isCertificationPage) {
    const lessonRef = courseContentRef
    const currentIndex = activeModule
      ? moduleSequence.indexOf(activeModule)
      : -1
    const nextModuleCode =
      currentIndex >= 0 && currentIndex + 1 < moduleSequence.length
        ? moduleSequence[currentIndex + 1]
        : null
    const nextLessonLabel =
      nextModuleCode && activeLesson?.actions?.next
        ? activeLesson.actions.next.replace('{code}', nextModuleCode)
        : nextModuleCode

    return (
      <>
        {topNavigation}
        <div className="page">
        {showLessonTopbar ? (
          <header className="lesson-topbar">
            <div className="lesson-topbar-left">
              <img
                className="hero-logo"
                src="/qio_logo.svg"
                alt="Quiz i Oslo logo"
              />
            </div>
              <div className="lesson-topbar-right">
              <div className="language-switcher">
                <label className="visually-hidden" htmlFor="language-select">
                  {copy.languageLabel}
                </label>
                <select
                  id="language-select"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  {supportedLanguages.map(({ code }) => (
                    <option key={code} value={code}>
                      {copy.languageNames[code]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </header>
        ) : (
          <header className="hero">
            <div className="hero-header">
              <img
                className="hero-logo"
                src="/qio_logo.svg"
                alt="Quiz i Oslo logo"
              />
            </div>
            <p className="hero-eyebrow">{certificationCopy.hero.eyebrow}</p>
            <h1>{certificationCopy.hero.title}</h1>
            <p className="hero-lead">{certificationCopy.hero.lead}</p>
            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={handleStartCourse}
              >
                {certificationCopy.ctaLabel}
              </button>
            </div>
          </header>
        )}

        <main className="content">
          {showEnrollment ? (
            <section
              className="card section enrollment"
              ref={courseContentRef}
            >
              <h2>{certificationCopy.enrollment.heading}</h2>
              {certificationCopy.enrollment.description && (
                <p>{certificationCopy.enrollment.description}</p>
              )}
              <form className="enrollment-form" onSubmit={handleEnrollmentSubmit}>
                <label htmlFor="enrollment-email">
                  {certificationCopy.enrollment.label}
                </label>
                <input
                  id="enrollment-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={enrollmentEmail}
                  onChange={(event) => {
                    setEnrollmentEmail(event.target.value)
                    if (enrollmentError) {
                      setEnrollmentError('')
                    }
                  }}
                  placeholder={certificationCopy.enrollment.placeholder}
                  required
                />
                {enrollmentError && (
                  <p className="form-error" role="alert">
                    {enrollmentError}
                  </p>
                )}
                <button type="submit" className="button button-primary">
                  {certificationCopy.enrollment.cta}
                </button>
              </form>
            </section>
          ) : showVerification ? (
            <section
              className="card section verification"
              ref={courseContentRef}
            >
              <h2>{certificationCopy.verification.heading}</h2>
              {certificationCopy.verification.description && (
                <p>{certificationCopy.verification.description}</p>
              )}
              <form
                className="verification-form"
                onSubmit={handleVerificationSubmit}
              >
                <label htmlFor="verification-place">
                  {certificationCopy.verification.label}
                </label>
                <input
                  id="verification-place"
                  type="text"
                  value={verificationPlace}
                  onChange={(event) => {
                    setVerificationPlace(event.target.value)
                    if (verificationError) {
                      setVerificationError('')
                    }
                  }}
                  placeholder={certificationCopy.verification.placeholder}
                  required
                />
                {certificationCopy.verification.hint && !verificationError && (
                  <p className="form-hint">{certificationCopy.verification.hint}</p>
                )}
                {verificationError && (
                  <p className="form-error" role="alert">
                    {verificationError}
                  </p>
                )}
                <button type="submit" className="button button-primary">
                  {certificationCopy.verification.cta}
                </button>
              </form>
            </section>
          ) : activeLesson ? (
            <section className="card section lesson" ref={lessonRef}>
              <div className="lesson-header">
                <span className="module-code">{activeModule}</span>
                <h2>{activeLesson.title}</h2>
              </div>
              <div className="lesson-intro">
                {activeLesson.intro?.map((paragraph, index) => (
                  <p key={`intro-${index}`}>{paragraph}</p>
                ))}
              </div>
              {activeLesson.sections?.map((section, index) => {
                const sectionKey = `${activeModule}-section-${index}`
                const isConfirmed = Boolean(sectionConfirmations[sectionKey])
                return (
                  <div className="lesson-block" key={`${section.heading ?? sectionKey}-${index}`}>
                    {section.heading && <h3>{section.heading}</h3>}
                    {section.description && <p>{section.description}</p>}
                    {section.items &&
                      (section.ordered ? (
                        <ol>
                          {section.items.map((item, itemIndex) => (
                            <li key={`${section.heading}-item-${itemIndex}`}>
                              {item}
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <ul>
                          {section.items.map((item, itemIndex) => (
                            <li key={`${section.heading}-item-${itemIndex}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ))}
                    {section.confirmRequired && (
                      <div className="lesson-confirm">
                        <button
                          type="button"
                          className={`button lesson-confirm-button${isConfirmed ? ' is-confirmed' : ''}`}
                          aria-pressed={isConfirmed}
                          onClick={() => handleSectionConfirm(sectionKey)}
                        >
                          {section.confirmLabel ?? 'Lest'}
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
              {activeLesson.multipleChoice && (
                <form className="lesson-quiz" aria-label="Multiple choice quiz">
                  {activeLesson.multipleChoice.map((question, index) => {
                    const questionKey = question.id ?? `${activeModule}-mc-${index}`
                    const selectedOptions = quizSelections[questionKey] ?? []
                    const options = question.options ?? []
                    return (
                      <fieldset
                        key={questionKey}
                        className="lesson-block multiple-choice"
                      >
                        <legend>{question.question}</legend>
                        <div className="multiple-choice-options">
                          {options.map((option, optionIndex) => {
                            const optionLabel =
                              typeof option === 'object' && option !== null
                                ? option.label
                                : String(option)
                            const inputId = `${questionKey}-option-${optionIndex}`
                            const isChecked = selectedOptions.includes(optionIndex)
                            return (
                              <label key={inputId} htmlFor={inputId} className="multiple-choice-option">
                                <input
                                  type="checkbox"
                                  id={inputId}
                                  name={questionKey}
                                  value={optionLabel}
                                  checked={isChecked}
                                  onChange={() => handleQuizOptionToggle(questionKey, optionIndex)}
                                  disabled={quizStatus.success}
                                />
                                <span>{optionLabel}</span>
                              </label>
                            )
                          })}
                        </div>
                      </fieldset>
                    )
                  })}
                  <div className="lesson-quiz-actions">
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={handleQuizSubmit}
                      disabled={quizStatus.success}
                    >
                      {activeLesson.submitLabel ?? 'Send inn'}
                    </button>
                  </div>
                  {quizStatus.message && (
                    <p
                      className={`lesson-quiz-feedback ${quizStatus.success ? 'success' : 'error'}`}
                      role="status"
                    >
                      {quizStatus.message}
                    </p>
                  )}
                </form>
              )}
              <div className="lesson-actions">
                <button
                  type="button"
                  className="button button-ghost"
                  onClick={() => {
                    setActiveModule(null)
                    setShowEnrollment(false)
                    setShowVerification(false)
                    setSectionConfirmations({})
                    window.requestAnimationFrame(() => {
                      lessonRef.current?.scrollIntoView({ behavior: 'smooth' })
                    })
                  }}
                >
                  {activeLesson.actions?.backToOverview ??
                    certificationCopy.modules.heading}
                </button>
{nextModuleCode && (
                  <button
                    type="button"
                    className="button button-primary"
                    disabled={!canProceedToNext}
                    onClick={() => {
                      if (!canProceedToNext) {
                        return
                      }
                      setShowMembershipPrompt(false)
                      setShowEnrollment(false)
                      setShowVerification(false)
                      setEnrollmentError('')
                      setVerificationError('')
                      setSectionConfirmations({})
                      setQuizSelections({})
                      setQuizStatus({ success: false, message: '' })
                      setActiveModule(nextModuleCode)
                      window.requestAnimationFrame(() => {
                        courseContentRef.current?.scrollIntoView({
                          behavior: 'smooth',
                        })
                      })
                    }}
                  >
                    {nextLessonLabel}
                  </button>
                )}
              </div>
            </section>
          ) : (
            <>
              {certificationCopy.overview.paragraphs.length > 0 && (
                <section className="card section">
                  {certificationCopy.overview.heading && (
                    <h2>{certificationCopy.overview.heading}</h2>
                  )}
                  {certificationCopy.overview.paragraphs.map((paragraph, index) =>
                    renderParagraphWithEmail(paragraph, `overview-${index}`),
                  )}
                </section>
              )}

              <section className="card section" ref={lessonRef}>
                <h2>{certificationCopy.modules.heading}</h2>
                <div className="module-items">
                  {certificationCopy.modules.items.map((item, index) => (
                    <div className="module-card" key={`${item.code}-${index}`}>
                      {item.code && (
                        <span className="module-code" aria-hidden="true">
                          {item.code}
                        </span>
                      )}
                      <h3>{item.title}</h3>
                      {item.description && <p>{item.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>

        <footer className="footer">
          <p>{copy.footer.rights.replace('{year}', year)}</p>
          <p>
            {copy.footer.follow}{' '}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              {copy.footer.socialName}
            </a>{' '}
            {copy.footer.socialHint}
          </p>
        </footer>

        {showMembershipPrompt && (
          <div className="overlay" role="dialog" aria-modal="true">
            <div className="overlay-content">
              <p className="overlay-question">
                {certificationCopy.overlay.question}
              </p>
              <div className="overlay-actions overlay-actions-grid">
                <button
                  type="button"
                  className="button button-primary overlay-button"
                  onClick={handleOverlayConfirm}
                >
                  {certificationCopy.overlay.yes}
                </button>
                <button
                  type="button"
                  className="button button-ghost overlay-button"
                  onClick={() => handleOverlayNavigate(membershipSlug)}
                >
                  {certificationCopy.overlay.joinNow}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </>
    )
  }

  if (isMembershipPage) {
    return (
      <>
        {topNavigation}
        <div className="page">
        <header className="hero">
          <div className="hero-header">
            <img className="hero-logo" src="/qio_logo.svg" alt="Quiz i Oslo logo" />
          </div>
          <p className="hero-eyebrow">{membershipCopy.hero.eyebrow}</p>
          <h1>{membershipCopy.hero.title}</h1>
          <p className="hero-lead">{membershipCopy.hero.lead}</p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={paymentSlug}
              onClick={(event) => {
                event.preventDefault()
                navigate(paymentSlug)
              }}
            >
              {membershipCopy.hero.primaryCta}
            </a>
            {SHOW_CERTIFICATION && membershipCopy.hero.secondaryCta && (
              <a
                className="button button-ghost"
                href={copy.certification.slug}
                onClick={(event) => {
                  event.preventDefault()
                  navigate(copy.certification.slug)
                }}
              >
                {membershipCopy.hero.secondaryCta}
              </a>
            )}
          </div>
        </header>

        <main className="content">
          {membershipCategoryOptions.length > 0 && (
            <div className="membership-selector" role="group" aria-label={copy.membership?.selectorLabel ?? 'Velg medlemskap'}>
              {membershipCategoryOptions.map(({ category, label }) => (
                <button
                  key={category}
                  type="button"
                  className={`button membership-selector-button${
                    selectedMembershipCategory === category ? ' is-active' : ''
                  }`}
                  onClick={() => {
                    setSelectedMembershipCategory(category)
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
          {orderedMembershipSections.map((section, index) => (
            <section
              className="card section"
              data-membership-category={section.category ?? undefined}
              key={`${section.heading ?? 'section'}-${section.category ?? index}`}
            >
              <div className="membership-section-content">
                <div className="membership-section-copy">
                  {section.heading && (
                    <div className="section-header">
                      <h2>{section.heading}</h2>
                      {section.tag && <span className="section-tag">{section.tag}</span>}
                    </div>
                  )}
                  {section.description && <p>{section.description}</p>}
                  {section.paragraphs?.map((paragraph, paragraphIndex) =>
                    renderParagraphWithEmail(
                      paragraph,
                      `membership-section-${index}-paragraph-${paragraphIndex}`,
                    ),
                  )}
                  {section.image && (
                    <img
                      className="membership-section-image"
                      src={section.image}
                      alt={section.imageAlt ?? ''}
                    />
                  )}
                {section.items &&
                  (section.ordered ? (
                    <ol>
                      {section.items.map((item, itemIndex) => (
                        <li key={`section-${index}-item-${itemIndex}`}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li key={`section-${index}-item-${itemIndex}`}>{item}</li>
                      ))}
                    </ul>
                  ))}
              </div>
                {section.category && !section.disableActions && (
                  <div className="membership-section-actions">
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => {
                        navigate(paymentSlug)
                      }}
                    >
                      {copy.membership?.ctaLabel ?? copy.hero.primaryCta}
                    </button>
                  </div>
                )}
              </div>
            </section>
          ))}
        </main>

        <footer className="footer">
          <p>{copy.footer.rights.replace('{year}', year)}</p>
          <p>
            {copy.footer.follow}{' '}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              {copy.footer.socialName}
            </a>{' '}
            {copy.footer.socialHint}
          </p>
        </footer>
      </div>
      </>
    )
  }

  if (isPaymentPage) {
    const paymentOptions = paymentCopy?.overview?.options ?? []
    const currentPaymentOption =
      paymentOptions.find(({ id }) => id === selectedPaymentOptionId) ??
      (paymentOptions.length > 0 ? paymentOptions[0] : null)
    const paymentHref = paymentCopy?.hero?.primaryCtaHref ?? '#'
    const paymentLinkIsExternal = /^https?:/i.test(paymentHref)
    const paymentFormCopy = paymentCopy?.form ?? {}

    const handlePaymentSubmit = (event) => {
      event.preventDefault()
      const form = event.currentTarget
      if (!form.checkValidity()) {
        form.reportValidity()
        return
      }

      if (paymentLinkIsExternal) {
        window.open(paymentHref, '_blank', 'noopener')
      } else {
        navigate(paymentHref)
      }
    }

    return (
      <>
        {topNavigation}
        <div className="page">
          <main className="content payment-content">
            {paymentCopy?.overview && (
              <section className="card section payment-overview">
                {paymentCopy?.hero?.eyebrow && (
                  <p className="hero-eyebrow">{paymentCopy.hero.eyebrow}</p>
                )}
                <h2>{paymentCopy.overview.heading}</h2>
                {paymentCopy?.hero?.lead && (
                  <p className="payment-lead">{paymentCopy.hero.lead}</p>
                )}
                {paymentCopy.overview.description &&
                  renderParagraphWithEmail(
                    paymentCopy.overview.description,
                    'payment-overview-description',
                  )}
                {paymentOptions.length > 0 && (
                  <>
                    <div
                      className="payment-selector"
                      role="group"
                      aria-label={
                        paymentCopy.overview.selectorLabel ??
                        paymentCopy.overview.heading
                      }
                    >
                      {paymentOptions.map((option, index) => {
                        const isActive = option.id === currentPaymentOption?.id
                        return (
                          <button
                            key={`payment-selector-${index}`}
                            type="button"
                            className={`button payment-selector-button${
                              isActive ? ' is-active' : ''
                            }`}
                            onClick={() => setSelectedPaymentOptionId(option.id)}
                            aria-pressed={isActive}
                          >
                            {option.title}
                          </button>
                        )
                      })}
                    </div>
                    {currentPaymentOption && (
                      <div className="payment-selected-card">
                        <div className="payment-selected-header">
                          <h3>{currentPaymentOption.title}</h3>
                          {currentPaymentOption.price && (
                            <span className="payment-selected-price">
                              {currentPaymentOption.price}
                            </span>
                          )}
                        </div>
                        {currentPaymentOption.description && (
                          <p>{currentPaymentOption.description}</p>
                        )}
                        {currentPaymentOption.details?.length > 0 && (
                          <ul className="payment-tier-details">
                            {currentPaymentOption.details.map(
                              (detail, detailIndex) => (
                                <li
                                  key={`payment-selected-detail-${detailIndex}`}
                                >
                                  {detail}
                                </li>
                              ),
                            )}
                          </ul>
                        )}
                        <form className="payment-form" onSubmit={handlePaymentSubmit}>
                          {paymentFormCopy.heading && (
                            <h4 className="payment-form-heading">
                              {paymentFormCopy.heading}
                            </h4>
                          )}
                          <div className="payment-form-grid">
                            <label className="payment-form-field" htmlFor="payment-first-name">
                              <span>{paymentFormCopy.firstNameLabel}</span>
                              <input
                                id="payment-first-name"
                                type="text"
                                value={paymentFirstName}
                                onChange={(event) =>
                                  setPaymentFirstName(event.target.value)
                                }
                                placeholder={paymentFormCopy.firstNamePlaceholder}
                                required
                              />
                            </label>
                            <label className="payment-form-field" htmlFor="payment-last-name">
                              <span>{paymentFormCopy.lastNameLabel}</span>
                              <input
                                id="payment-last-name"
                                type="text"
                                value={paymentLastName}
                                onChange={(event) =>
                                  setPaymentLastName(event.target.value)
                                }
                                placeholder={paymentFormCopy.lastNamePlaceholder}
                                required
                              />
                            </label>
                            <label className="payment-form-field" htmlFor="payment-phone">
                              <span>{paymentFormCopy.phoneLabel}</span>
                              <input
                                id="payment-phone"
                                type="tel"
                                value={paymentPhone}
                                onChange={(event) =>
                                  setPaymentPhone(event.target.value)
                                }
                                placeholder={paymentFormCopy.phonePlaceholder}
                                required
                              />
                            </label>
                            <label className="payment-form-field" htmlFor="payment-email">
                              <span>{paymentFormCopy.emailLabel}</span>
                              <input
                                id="payment-email"
                                type="email"
                                inputMode="email"
                                value={paymentEmail}
                                onChange={(event) =>
                                  setPaymentEmail(event.target.value)
                                }
                                placeholder={paymentFormCopy.emailPlaceholder}
                                required
                              />
                            </label>
                          </div>
                          <label className="payment-form-consent" htmlFor="payment-consent">
                            <input
                              id="payment-consent"
                              type="checkbox"
                              checked={paymentConsent}
                              onChange={(event) =>
                                setPaymentConsent(event.target.checked)
                              }
                              required
                            />
                            <span>{paymentFormCopy.consentLabel}</span>
                          </label>
                          <div className="payment-card-actions">
                            <button type="submit" className="button button-primary">
                              {paymentCopy.hero.payLabel ??
                                paymentCopy.hero.primaryCtaLabel}
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </>
                )}
              </section>
            )}

            {paymentCopy?.instructions && (
              <section className="card section">
                <h2>{paymentCopy.instructions.heading}</h2>
                {paymentCopy.instructions.intro &&
                  renderParagraphWithEmail(
                    paymentCopy.instructions.intro,
                    'payment-instructions-intro',
                  )}
                {paymentCopy.instructions.steps?.length > 0 && (
                  <ol className="payment-step-list">
                    {paymentCopy.instructions.steps.map((step, index) => (
                      <li key={`payment-instruction-step-${index}`}>{step}</li>
                    ))}
                  </ol>
                )}
                {paymentCopy.instructions.note &&
                  renderParagraphWithEmail(
                    paymentCopy.instructions.note,
                    'payment-instructions-note',
                  )}
              </section>
            )}

            {paymentCopy?.confirmation && (
              <section className="card section">
                <h2>{paymentCopy.confirmation.heading}</h2>
                {paymentCopy.confirmation.steps?.length > 0 && (
                  <ol className="payment-step-list">
                    {paymentCopy.confirmation.steps.map((step, index) => (
                      <li key={`payment-confirmation-step-${index}`}>{step}</li>
                    ))}
                  </ol>
                )}
                {paymentCopy.confirmation.note &&
                  renderParagraphWithEmail(
                    paymentCopy.confirmation.note,
                    'payment-confirmation-note',
                  )}
              </section>
            )}

            {paymentCopy?.contact && (
              <section className="card section">
                <h2>{paymentCopy.contact.heading}</h2>
                {paymentCopy.contact.description &&
                  renderParagraphWithEmail(
                    paymentCopy.contact.description,
                    'payment-contact-description',
                  )}
                {paymentCopy.contact.items?.length > 0 && (
                  <ul className="payment-contact-details">
                    {paymentCopy.contact.items.map((item, index) => (
                      <li key={`payment-contact-item-${index}`}>{item}</li>
                    ))}
                  </ul>
                )}
                {(paymentCopy.contact.ctaLabel ||
                  paymentCopy.contact.ctaHref) && (
                  <div className="payment-contact-actions">
                    <a
                      className="button button-primary"
                      href={
                        paymentCopy.contact.ctaHref ?? `mailto:${email}`
                      }
                    >
                      {paymentCopy.contact.ctaLabel ?? email}
                    </a>
                  </div>
                )}
              </section>
            )}
          </main>

          <footer className="footer">
            <p>{copy.footer.rights.replace('{year}', year)}</p>
            <p>
              {copy.footer.follow}{' '}
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                {copy.footer.socialName}
              </a>{' '}
              {copy.footer.socialHint}
            </p>
          </footer>
        </div>
      </>
    )
  }

  return (
    <>
      {topNavigation}
      <div className="page">
        <header className="hero">
          <div className="hero-header">
            <img className="hero-logo" src="/qio_logo.svg" alt="Quiz i Oslo logo" />
          </div>
          <p className="hero-eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-lead">{copy.hero.lead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={copy.membership.slug}>
              {copy.hero.primaryCta}
            </a>
          </div>
        </header>

        <main className="content">
          <section className="card section" id="info">
            <h2>{copy.info.heading}</h2>
            {copy.info.paragraphs.map((paragraph, index) =>
              renderParagraphWithEmail(paragraph, `info-${index}`),
            )}
            <p className="tip">{copy.info.tip}</p>
            {SHOW_CERTIFICATION &&
              (copy.hero.secondaryCta ?? copy.certification?.ctaLabel) && (
                <div className="section-actions">
                  <a
                    className="button button-primary"
                    href={certificationSlug}
                    onClick={(event) => {
                      event.preventDefault()
                      navigate(certificationSlug)
                    }}
                  >
                    {copy.hero.secondaryCta ?? copy.certification?.ctaLabel}
                  </a>
                </div>
              )}
          </section>
        </main>

        <footer className="footer">
          <p>{copy.footer.rights.replace('{year}', year)}</p>
          <p>
            {copy.footer.follow}{' '}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              {copy.footer.socialName}
            </a>{' '}
            {copy.footer.socialHint}
          </p>
        </footer>
      </div>
      </>
    )
  }

  export default App
