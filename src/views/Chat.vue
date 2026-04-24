<template>
  <div class="chat-container">
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>DullChat</h2>
        <a-button type="primary" @click="createNewSession">
          <template #icon><icon-plus /></template>
          新建会话
        </a-button>
      </div>
      <div class="session-list">
        <p class="placeholder">会话列表将在这里显示</p>
      </div>
    </div>
    <div class="main-content">
      <div class="chat-header">
        <h3>欢迎使用 DullChat</h3>
      </div>
      <div class="message-area">
        <div class="welcome-message">
          <h1>👋 你好！</h1>
          <p>这是一个现代化的 AI 聊天桌面应用</p>
          <p>开始新的对话，体验智能助手的强大功能</p>
        </div>
      </div>
      <div class="input-area">
        <a-textarea
          v-model="inputMessage"
          placeholder="输入消息..."
          :auto-size="{ minRows: 1, maxRows: 4 }"
          @keydown.enter.exact.prevent="sendMessage"
        />
        <a-button type="primary" @click="sendMessage">
          发送
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconPlus } from '@arco-design/web-vue/es/icon'

const inputMessage = ref('')

const createNewSession = () => {
  console.log('创建新会话')
}

const sendMessage = () => {
  if (inputMessage.value.trim()) {
    console.log('发送消息:', inputMessage.value)
    inputMessage.value = ''
  }
}
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  height: 100vh;
  background-color: var(--color-bg-primary);
}

.sidebar {
  width: 280px;
  background-color: var(--color-bg-secondary);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid var(--color-border);

  h2 {
    margin-bottom: 16px;
    color: var(--color-text-primary);
  }
}

.session-list {
  flex: 1;
  overflow-y: auto;
  padding: 16px;

  .placeholder {
    text-align: center;
    color: var(--color-text-tertiary);
    margin-top: 40px;
  }
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 20px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-primary);

  h3 {
    color: var(--color-text-primary);
  }
}

.message-area {
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-message {
  text-align: center;
  color: var(--color-text-secondary);

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
}

.input-area {
  padding: 20px;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-primary);
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

