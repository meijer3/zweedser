import { Route, Router } from "@solidjs/router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
	return (
		<Router
			root={(props) => (
				<div class="min-h-screen flex flex-col overflow-x-hidden">
					<Navbar />
					<main class="flex-1">{props.children}</main>
					<Footer />
				</div>
			)}
		>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
		</Router>
	);
}

export default App;
