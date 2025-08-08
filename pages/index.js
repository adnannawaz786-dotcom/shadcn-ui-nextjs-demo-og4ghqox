import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Star, Share2, Download, ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        <motion.div
          className="container mx-auto px-4 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Shadcn/ui Components Demo
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
              Beautiful Components
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Explore the power of Shadcn/ui components with stunning cards and interactive buttons
            </p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button variant="outline" size="lg" className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                  View Documentation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {/* Feature Card 1 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      Component
                    </Badge>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Interactive Cards
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    Beautiful, responsive card components with smooth animations and hover effects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">Fully responsive design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">Smooth animations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">Customizable themes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <motion.div
                    className="flex gap-2 w-full"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                      <Heart className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      Interactive
                    </Badge>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Dynamic Buttons
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    Engaging button components with various styles, sizes, and interactive states
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Button variant="default" className="w-full justify-start">
                        Default Button
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Button variant="secondary" className="w-full justify-start">
                        Secondary Button
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Button variant="outline" className="w-full justify-start">
                        Outline Button
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <motion.div
                    className="w-full"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button variant="destructive" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Examples
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="h-full md:col-span-2 lg:col-span-1"
            >
              <Card className="h-full bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm border-purple-200/50 dark:border-purple-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Premium
                    </Badge>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-purple-600" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 dark:from-purple-100 dark:to-pink-100 bg-clip-text text-transparent">
                    Advanced Features
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    Explore advanced animations, gradients, and interactive elements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200/30 dark:border-purple-700/30">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                        Gradient Backgrounds
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Beautiful gradient effects with smooth transitions
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <motion.div
                        className="w-3 h-3 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-pink-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-indigo-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <motion.div
                    className="w-full"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Explore More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>

          {/* Button Showcase */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
              Button Variations
            </h2>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button size="sm">Small Button</Button>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">