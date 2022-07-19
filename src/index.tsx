import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 리액트 쿼리
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </React.StrictMode>
);
