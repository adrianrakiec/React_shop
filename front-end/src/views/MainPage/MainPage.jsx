import { Layout } from '../../components/Layout/Layout';
import { Hero } from '../../components/Hero/Hero';
import HERO_IMG from '../../assets/hero-img.jpg';

export const MainPage = () => {
    return (
        <Layout>
            <Hero heroImg={HERO_IMG}/>
        </Layout>
    )
}