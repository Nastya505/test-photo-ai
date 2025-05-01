<script setup lang="ts">
interface BlockItem {
  name: string;
  description: string;
  covers: string[];
}

const blocks: BlockItem[] = [
{
        "name": "LinkedIn headshots (man)",
        "description": "Your LinkedIn profile is your digital first impression—make it count with a studio-quality professional headshot that enhances your credibility and personal brand. Photo AI helps you create polished, high-quality headshots that meet the standards of recruiters, hiring managers, and business professionals. Upgrade your LinkedIn profile with a professional, career-boosting headshot today",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/661eby0eq6g.webp"
        ]
    },
    {
        "name": "AI Selfies (man)",
        "description": "Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, giving you perfect selfies every time without the hassle",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/x3tn68ke96.webp"
        ]
    },
    {
        "name": "Easter (man)",
        "description": "Hop into the spirit of Easter with a joyful and colorful photo shoot. Capture the fun of the season with bunny ears, Easter eggs, and bright spring colors for a cheerful, family-friendly look",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/q13ef65ii3i.webp",        ]
    },
    {
        "name": "Instagram (man)",
        "description": "Take engaging and visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes and followers with captivating images that reflect your unique style and charisma",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/4c88392d6ip.webp"
        ]
    },
{
        "name": "LinkedIn headshots (man)",
        "description": "Your LinkedIn profile is your digital first impression—make it count with a studio-quality professional headshot that enhances your credibility and personal brand. Photo AI helps you create polished, high-quality headshots that meet the standards of recruiters, hiring managers, and business professionals. Upgrade your LinkedIn profile with a professional, career-boosting headshot today",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/661eby0eq6g.webp"
        ]
    },
    {
        "name": "AI Selfies (man)",
        "description": "Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, giving you perfect selfies every time without the hassle",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/x3tn68ke96.webp"
        ]
    },
    {
        "name": "Easter (man)",
        "description": "Hop into the spirit of Easter with a joyful and colorful photo shoot. Capture the fun of the season with bunny ears, Easter eggs, and bright spring colors for a cheerful, family-friendly look",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/q13ef65ii3i.webp",        ]
    },
    {
        "name": "Instagram (man)",
        "description": "Take engaging and visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes and followers with captivating images that reflect your unique style and charisma",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/4c88392d6ip.webp"
        ]
    },
{
        "name": "LinkedIn headshots (man)",
        "description": "Your LinkedIn profile is your digital first impression—make it count with a studio-quality professional headshot that enhances your credibility and personal brand. Photo AI helps you create polished, high-quality headshots that meet the standards of recruiters, hiring managers, and business professionals. Upgrade your LinkedIn profile with a professional, career-boosting headshot today",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/661eby0eq6g.webp"
        ]
    },
    {
        "name": "AI Selfies (man)",
        "description": "Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, giving you perfect selfies every time without the hassle",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/x3tn68ke96.webp"
        ]
    },
    {
        "name": "Easter (man)",
        "description": "Hop into the spirit of Easter with a joyful and colorful photo shoot. Capture the fun of the season with bunny ears, Easter eggs, and bright spring colors for a cheerful, family-friendly look",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/q13ef65ii3i.webp",        ]
    },
    {
        "name": "Instagram (man)",
        "description": "Take engaging and visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes and followers with captivating images that reflect your unique style and charisma",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/4c88392d6ip.webp"
        ]
    },
{
        "name": "LinkedIn headshots (man)",
        "description": "Your LinkedIn profile is your digital first impression—make it count with a studio-quality professional headshot that enhances your credibility and personal brand. Photo AI helps you create polished, high-quality headshots that meet the standards of recruiters, hiring managers, and business professionals. Upgrade your LinkedIn profile with a professional, career-boosting headshot today",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/661eby0eq6g.webp"
        ]
    },
    {
        "name": "AI Selfies (man)",
        "description": "Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, giving you perfect selfies every time without the hassle",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/x3tn68ke96.webp"
        ]
    },
    {
        "name": "Easter (man)",
        "description": "Hop into the spirit of Easter with a joyful and colorful photo shoot. Capture the fun of the season with bunny ears, Easter eggs, and bright spring colors for a cheerful, family-friendly look",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/q13ef65ii3i.webp",        ]
    },
    {
        "name": "Instagram (man)",
        "description": "Take engaging and visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes and followers with captivating images that reflect your unique style and charisma",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/4c88392d6ip.webp"
        ]
    },
{
        "name": "LinkedIn headshots (man)",
        "description": "Your LinkedIn profile is your digital first impression—make it count with a studio-quality professional headshot that enhances your credibility and personal brand. Photo AI helps you create polished, high-quality headshots that meet the standards of recruiters, hiring managers, and business professionals. Upgrade your LinkedIn profile with a professional, career-boosting headshot today",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/661eby0eq6g.webp"
        ]
    },
    {
        "name": "AI Selfies (man)",
        "description": "Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, giving you perfect selfies every time without the hassle",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/x3tn68ke96.webp"
        ]
    },
    {
        "name": "Easter (man)",
        "description": "Hop into the spirit of Easter with a joyful and colorful photo shoot. Capture the fun of the season with bunny ears, Easter eggs, and bright spring colors for a cheerful, family-friendly look",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/q13ef65ii3i.webp",        ]
    },
    {
        "name": "Instagram (man)",
        "description": "Take engaging and visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes and followers with captivating images that reflect your unique style and charisma",
        "covers": [
            "https://cwpufmhbzuumfwmqcrll.supabase.co/storage/v1/object/public/covers/prompt-covers/4c88392d6ip.webp"
        ]
    },
    
    ]
</script>


<template>
    <div class="flex flex-col lg:flex-row w-full items-stretch justify-between gap-4">
        <div class="columns-2 w-full lg:w-1/2 gap-4 bg-black text-white">
        <ImageCard
          v-for="(item, index) in blocks.slice(0, 4)"
          :key="index"
          :item="item"
          :heightClass="alternatingHeights(index)"
        />
      </div>
      <div class="columns-2 w-full lg:w-1/2 gap-4 bg-black text-white">
        <ImageCard
          v-for="(item, index) in blocks.slice(4, 8)"
          :key="index"
          :item="item"
          :heightClass="alternatingHeights(index)"
        />
      </div>
    </div>
  
    <div class="flex flex-col lg:flex-row w-full items-stretch justify-between gap-x-4">
      <div class="columns-1 w-full lg:w-1/2 bg-black text-white">
        <ImageCard :item="blocks[9]" heightClass="h-[440px] md:h-[960px]" />
      </div>
  
      <div class="columns-2 w-full lg:w-1/2 gap-4 bg-black text-white">
        <ImageCard
          v-for="(item, index) in blocks.slice(10, 14)"
          :key="index"
          :item="item"
          :heightClass="alternatingHeights(index)"
          :noMargin="index === 1 || index === 3"
        />
      </div>
    </div>
  </template>
<script lang="ts">
import ImageCard from './ImageCard.vue'

const alternatingHeights = (index: number) => {
  const isEvenColumn = Math.floor(index / 2) % 2 === 0
  const isTop = index % 2 === 0

  return isEvenColumn
    ? (isTop ? 'h-[267px] md:h-[400px]' : 'h-[317px] md:h-[500px]')
    : (isTop ? 'h-[317px] md:h-[500px]' : 'h-[267px] md:h-[400px]')
}

</script>

