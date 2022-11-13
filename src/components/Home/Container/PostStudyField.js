import clsx from 'clsx'
import styles from './container.module.css';
function PostStudyField({studyFields})
{
   
    // const classes = 
    return (
        studyFields.map(function (field,index) {
            const disabled = index === 2;
            return <li 
            className= {clsx({[styles.disabledField]: disabled},"flex items-center justify-center text-5xl leading-[3.6875rem] text-[#646464CC] my-7 md:text-[20px] md:my-3")} 
            key={index}
            >
                {field}
                </li>
        })
    )
}
export default PostStudyField


