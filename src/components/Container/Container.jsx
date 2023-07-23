import css from './Container.module.css';

const Container = ({children }) => <section className={css.container}>{children}</section>;  
export default Container;