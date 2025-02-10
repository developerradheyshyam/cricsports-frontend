import { DM_Serif_Display, Urbanist } from 'next/font/google'

export const dmSerif = DM_Serif_Display({
  weight: '400', // DM Serif Display only comes in 400 weight
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-urbanist',
})