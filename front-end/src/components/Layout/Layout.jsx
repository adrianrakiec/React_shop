import { CategoryMenu } from '../CategoryMenu/CategoryMenu';
import { Footer } from '../Footer/Footer';
import { IconMenu } from '../IconMenu/IconMenu';
import { Logo } from '../Logo/Logo';
import { MainContent } from '../MainContent/MainContent';
import { MainMenu } from '../MainMenu/MainMenu';
import { TopBar } from '../TopBar/TopBar';

export const Layout = ({ children }) => {
	return (
		<>
			<MainContent>
				<TopBar>
					<MainMenu />
					<Logo />
					<span>
						<IconMenu />
					</span>
				</TopBar>
				<CategoryMenu />
				{children}
			</MainContent>
			<Footer />
		</>
	);
};