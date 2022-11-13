
import Container from './Container/container.js'
import Sidebar from './Sidebar/sidebar';

function Home() 
{
    return (
        <div className="home grid grid-cols-[1fr_11fr] md:grid-cols-1 md:h-full">
            <Sidebar></Sidebar>
            <Container></Container>
        </div>
        
    )
}
export default Home;