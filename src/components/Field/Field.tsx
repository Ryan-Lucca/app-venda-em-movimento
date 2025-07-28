import { useState } from 'react';
import styles from './Field.module.css';
import { Icon } from '../../assets/icon';

interface FieldProps {
  type?: 'money' | 'percentage' | 'password' | 'options' | 'email';
  label: string;
  required?: boolean;
}

export default function Field({ type, label, required }: FieldProps) {
  const inputId = `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordView = () => {
    setShowPassword((prev) => !prev);
  };

  switch (type) {
    case 'password':
      return (
        <div className={styles.container}>
          <label htmlFor={inputId}>
            {required && <span className={styles.required}>* </span>} 
            {label}
          </label>
          <div className={styles.InputWrapper}>
            <input
              id={inputId}
              type={showPassword ? 'text' : 'password'}
              required={required}
            />
            <span className={styles.prefix} onClick={togglePasswordView} style={{ cursor: 'pointer' }}>
              <Icon name={showPassword ? 'olhoA' : 'olhoF'} size={25} />
            </span>
          </div>
        </div>
      );
    case 'email':
      return (
        <div className={styles.container}>
          <label htmlFor={inputId}>
            {required && <span className={styles.required}>* </span>}
            {label}
          </label>
          <div className={styles.InputWrapper}>
            <input id={inputId} type="email" required={required} />
          </div>
        </div>
      );
    default:
      return (
        <div className={styles.container}>
          <label htmlFor={inputId}>
            {required && <span className={styles.required}>* </span>}
            {label}
          </label>
          <input id={inputId} type="text" required={required} />
        </div>
      );
  }
}
