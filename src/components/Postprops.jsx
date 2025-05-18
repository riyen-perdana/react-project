import classes from './Post.module.css';
export default function Postprops(props) {
    return (
        <li>
            <div className={classes.post}>
                <p className={classes.author}>{props.name}</p>
                <p className={classes.text}>{props.message}</p>
            </div>
        </li>
    )
}

