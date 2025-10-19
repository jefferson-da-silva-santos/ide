// utils/notifier.js
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

let notyfInstance = null;
let activeNotification = null;

const getNotyfInstance = () => {
  if (!notyfInstance) {
    notyfInstance = new Notyf({
      duration: 5000,
      position: { x: 'right', y: 'top' },
      types: [
        { type: 'success', background: '#0066ffff' },
        { type: 'error', background: '#ED3D3D' },
        { type: 'warning', background: '#FFC107' }
      ]
    });
  }
  return notyfInstance;
};

export const showNotification = (type, message) => {
  if (activeNotification) {
    notyfInstance?.dismissAll(); // fecha todas as notificações
    activeNotification = null;
  }

  const notyf = getNotyfInstance();

  // Não use .open() se espera um retorno manipulável
  if (type === "success") {
    activeNotification = notyf.success(message);
  } else if (type === "error") {
    activeNotification = notyf.error(message);
  } else {
    activeNotification = notyf.open({ type, message });
  }
};