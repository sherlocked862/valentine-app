'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const ValentinePage = () => {
    const [saidNoCount, setSaidNoCount] = useState(0)
    const [showCelebration, setShowCelebration] = useState(false)
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

    const noButtonRef = useRef<HTMLButtonElement>(null)

    const yesButtonSizes = [
        'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'
    ]

    const noButtonTexts = [
        'No',
        'Are you sure?',
        'Please?',
        'Don\'t do this to me!',
        'I\'ll cry!',
        'You\'re breaking my heart!',
        'One more chance?',
        'Pretty please?',
        'I\'ll give you chocolate!',
        'Last chance!'
    ]

    const teaserGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJkMzQ0YzY4NzQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKsQjRWo9CXKG6A/giphy.gif'
    const celebrationGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJkMzQ0YzY4NzQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZTQ0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif'

    useEffect(() => {
        setNoButtonPosition({ x: 0, y: 0 })
    }, [])

    const handleYesClick = () => {
        confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 },
            colors: ['#ff69b4', '#dc143c', '#ffc0cb', '#ff1493']
        })
        setShowCelebration(true)
    }

    const handleNoInteraction = () => {
        setSaidNoCount(prev => Math.min(prev + 1, noButtonTexts.length - 1))

        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        const buttonWidth = noButtonRef.current ? noButtonRef.current.offsetWidth : 150
        const buttonHeight = noButtonRef.current ? noButtonRef.current.offsetHeight : 50

        const maxLeft = viewportWidth - buttonWidth - 20
        const maxTop = viewportHeight - buttonHeight - 20

        const newX = Math.max(20, Math.random() * maxLeft)
        const newY = Math.max(20, Math.random() * maxTop)

        setNoButtonPosition({ x: newX, y: newY })
    }

    const handleNoClick = (e: React.MouseEvent) => {
        e.preventDefault()
        handleNoInteraction()
    }

    useEffect(() => {
        if (!showCelebration) {
            setSaidNoCount(0)
            setNoButtonPosition({ x: 0, y: 0 })
        }
    }, [showCelebration])

    const hasMoved = noButtonPosition.x !== 0 || noButtonPosition.y !== 0

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-gradient-to-br from-pink-50 to-red-50 flex flex-col items-center justify-center selection:bg-pink-200">
            <AnimatePresence mode="wait">
                {!showCelebration ? (
                    <motion.div
                        key="tease"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center w-full max-w-2xl px-4 flex flex-col items-center"
                    >
                        <motion.div
                            className="mb-6 md:mb-8"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <img
                                src={teaserGif}
                                alt="Cute Valentine bear"
                                className="w-40 h-40 md:w-64 md:h-64 mx-auto rounded-2xl shadow-lg object-cover"
                            />
                        </motion.div>

                        <motion.h1
                            className="text-3xl md:text-6xl font-bold text-valentine-red mb-8 md:mb-12 heart-beat leading-tight"
                        >
                            Will you be my Valentine?
                        </motion.h1>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full relative z-10">
                            <motion.button
                                onClick={handleYesClick}
                                className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 z-20 ${yesButtonSizes[Math.min(saidNoCount, yesButtonSizes.length - 1)]}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Yes! 💖
                            </motion.button>

                            <motion.button
                                ref={noButtonRef}
                                className={`
                  bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-200
                  ${hasMoved ? 'fixed' : 'relative'} 
                `}
                                style={
                                    hasMoved
                                        ? { left: noButtonPosition.x, top: noButtonPosition.y }
                                        : {}
                                }
                                onMouseEnter={handleNoInteraction}
                                onClick={handleNoClick}
                                onTouchStart={handleNoInteraction}
                                animate={hasMoved ? {
                                    x: 0,
                                    y: 0,
                                } : {}}
                            >
                                {noButtonTexts[Math.min(saidNoCount, noButtonTexts.length - 1)]}
                            </motion.button>
                        </div>

                        {saidNoCount > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-8 text-pink-600 text-sm md:text-base font-medium"
                            >
                                {saidNoCount >= 3 && '🥺 Pretty please?'}
                                {saidNoCount >= 6 && ' I\'m begging you!'}
                                {saidNoCount >= 8 && ' Why are you doing this to me??'}
                            </motion.div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="celebration"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center w-full max-w-2xl px-4 h-full flex flex-col justify-center items-center overflow-y-auto"
                    >
                        <motion.div
                            className="mb-6"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <img
                                src={celebrationGif}
                                alt="Happy celebration"
                                className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-2xl shadow-lg"
                            />
                        </motion.div>

                        <motion.h1 className="text-3xl md:text-6xl font-bold text-red-600 mb-6 animate-bounce">
                            YAY! I knew it! 💕
                        </motion.h1>

                        <motion.div
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-pink-200 w-full max-h-[60vh] overflow-y-auto"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="text-left space-y-4">
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    <span className="text-2xl font-bold text-red-500">💌 My Dearest Manali,</span>
                                </p>

                                {/* Fixed the apostrophe below: You're -> You&apos;re */}
                                <p className="text-gray-700">
                                    Words cannot express how much you mean to me. You&apos;re the reason I wake up with a smile.
                                </p>

                                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-4">
                                    <p className="text-gray-800 italic font-medium">
                                        &quot;I love you so much. I also wanted to tell you how sorry I am for my behavior
                                        over the past two days. I promise to do better and make it up to you.&quot;
                                    </p>
                                </div>

                                <p className="text-gray-800">
                                    Thank you for saying yes to being my Valentine!
                                </p>

                                <div className="text-center pt-4 font-handwriting text-2xl text-pink-600">
                                    💖 Forever Yours, Shyam 💖
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ValentinePage