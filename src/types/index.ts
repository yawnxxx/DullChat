export interface ElectronAPI {
  window: {
    minimize: () => void
    maximize: () => void
    close: () => void
  }
  db: {
    getSessions: () => Promise<Session[]>
    saveSession: (session: Session) => Promise<void>
    deleteSession: (id: string) => Promise<void>
    getMessages: (sessionId: string) => Promise<Message[]>
    saveMessage: (message: Message) => Promise<void>
    getPrompts: () => Promise<Prompt[]>
    savePrompt: (prompt: Prompt) => Promise<void>
    deletePrompt: (id: string) => Promise<void>
    getSettings: () => Promise<Record<string, any>>
    saveSetting: (key: string, value: any) => Promise<void>
    getModels: () => Promise<AIModel[]>
    saveModel: (model: AIModel) => Promise<void>
  }
  file: {
    export: (data: any, path: string) => Promise<void>
    import: (path: string) => Promise<any>
    selectFile: () => Promise<string | null>
    selectDirectory: () => Promise<string | null>
  }
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}

export interface Session {
  id: string
  title: string
  model: string
  createdAt: number
  updatedAt: number
  metadata?: Record<string, any>
}

export interface Message {
  id: string
  sessionId: string
  role: 'user' | 'assistant' | 'system'
  content: string
  createdAt: number
}

export interface Prompt {
  id: string
  title: string
  content: string
  category?: string
  tags?: string[]
  createdAt: number
}

export interface AIModel {
  id: string
  provider: 'openai' | 'claude' | 'local'
  name: string
  apiKey?: string
  baseUrl?: string
  config?: Record<string, any>
  enabled: boolean
}
