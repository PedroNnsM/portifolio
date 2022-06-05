import SocialSidebar from "../componentes/sidebar/index.jsx";
import Header from "../componentes/header/index.jsx";

function Home() {
	return (
		<div className="container">
			<Header />
			<div className="content">
				<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sapien at urna blandit maximus. Sed euismod, augue vitae ornare condimentum, urna purus pulvinar nunc, sed tristique sem urna at ante. Duis eget ipsum non sem pretium consectetur. Aliquam erat volutpat. Maecenas pellentesque eget lectus euismod semper. Ut eget nisl porta, finibus eros sed, tincidunt nibh.
				</p>
				<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sapien at urna blandit maximus. Sed euismod, augue vitae ornare condimentum, urna purus pulvinar nunc, sed tristique sem urna at ante. Duis eget ipsum non sem pretium consectetur. Aliquam erat volutpat. Maecenas pellentesque eget lectus euismod semper. Ut eget nisl porta, finibus eros sed, tincidunt nibh.
				</p>
				<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sapien at urna blandit maximus. Sed euismod, augue vitae ornare condimentum, urna purus pulvinar nunc, sed tristique sem urna at ante. Duis eget ipsum non sem pretium consectetur. Aliquam erat volutpat. Maecenas pellentesque eget lectus euismod semper. Ut eget nisl porta, finibus eros sed, tincidunt nibh.
				</p>
			</div>
			<SocialSidebar />
		</div>
	);
}

export default Home;