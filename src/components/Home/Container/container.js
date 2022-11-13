import logoPioneer from '../Img/logo-pioneer.png'
import PostStudyField from './PostStudyField.js'

// Fake API
const studyFields = ['AI', 'Electronic', 'I0T', 'Web', 'App' ,'Algorithms']

function Container() 
{
    return (
        <div className="container mx-7 mt-7 md: mx-4 md:my-4">
            <img src={logoPioneer} className="w-96 md:w-60" alt='Logo Pioneer'></img>
            <div className="flex justify-center w-full my-[20px] cursor-default md:justify-around md:items-center md:h-[calc(100%-80px)]">
                <span className="font-extrabold text-[80px] mt-[170px] md:text-[20px] md:mx-auto ">Learning</span>
                <ul className="md:mx-auto">
                    <PostStudyField 
                        studyFields={studyFields}
                    />
                </ul>
                <span className="font-extrabold text-[80px] mt-[170px] md:text-[20px] md:mx-auto ">and Sharing</span>
            </div>
        </div>

    )
}
export default Container
