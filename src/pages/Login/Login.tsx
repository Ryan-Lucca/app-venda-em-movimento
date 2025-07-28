import styles from './Login.module.css';
import Field from '../../components/Field/Field';

export function Login() {
  return (
		<div className={styles.container}>
			<h1>PicPay Visão Executivo</h1>
			<p>Informe os seus dados para acessar o PicPay Visão Executivo.</p>
			<Field type='email' label='E-mail'/>
			<Field type='password' label='Senha'/>
		</div>
	)
}
