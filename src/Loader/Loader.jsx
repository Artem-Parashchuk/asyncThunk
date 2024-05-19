import s from './Loader.module.css'
export const Loader = () => {
  return (
    <div className={s.loader_block}>
       <span className="loading loading-infinity loading-lg"></span>
    </div>
  )
}
 