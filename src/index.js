"use strict"

import m from "mithril"

function Component() {
	// How do we do state here, how do I do useful javascript along with 
	return {
		view: () => (
			<main>
				<h1>Zeal</h1>
				<p>
					I will add contents here in the future for doing something I'm mostly
					messing around with mithril at the moment.
				</p>
			</main>
		)
	}
}

const root = document.body

m.render(root, <Component/>)
