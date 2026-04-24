import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Theme = 'light' | 'dark' | 'custom'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('light')
  const customColors = ref<Record<string, string>>({})

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const setCustomColor = (key: string, value: string) => {
    customColors.value[key] = value
    document.documentElement.style.setProperty(`--${key}`, value)
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }

  return {
    theme,
    customColors,
    setTheme,
    setCustomColor,
    initTheme
  }
})
