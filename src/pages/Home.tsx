import PageTitle from "../components/PageTitle.tsx";
import HomeBG from "../assets/vendor/synth-cities/city.png"

const Home = () => {
    return (<>
        <PageTitle>Home</PageTitle>
        <img className={'home-bg-image'} src={HomeBG} />
    </>)
}
export default Home