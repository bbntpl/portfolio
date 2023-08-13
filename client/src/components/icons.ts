import PersonalLogo from '../assets/icons/logo/bb-logo.svg';
import PersonalLogoAnimated from '../assets/icons/logo/bb-logo-animated.svg';
import AboutIcon from '../assets/icons/menu/about.svg';
import EducationIcon from '../assets/icons/menu/education.svg';
import SkillIcon from '../assets/icons/menu/skill.svg';
import ProjectIcon from '../assets/icons/menu/web.svg';
import FacebookIcon from '../assets/icons/socials/facebook.svg';
import GithubIcon from '../assets/icons/socials/github.svg';
import InstagramIcon from '../assets/icons/socials/instagram.svg';
import LinkedinIcon from '../assets/icons/socials/linkedin.svg';
import TwitterIcon from '../assets/icons/socials/twitter.svg';

export default function getIcon({ name }: { name: string }) {
	switch (name) {
		case 'About':
			return AboutIcon;
		case 'Education':
			return EducationIcon;
		case 'Error':
			return PersonalLogo;
		case 'Facebook':
			return FacebookIcon;
		case 'Github':
			return GithubIcon;
		case 'Instagram':
			return InstagramIcon;
		case 'Linkedin':
			return LinkedinIcon;
		case 'Loading':
			return PersonalLogoAnimated;
		case 'Logo':
			return PersonalLogo;
		case 'Projects':
			return ProjectIcon;
		case 'Skills':
			return SkillIcon;
		case 'Twitter':
			return TwitterIcon;
		default:
			return PersonalLogo;
	}
}