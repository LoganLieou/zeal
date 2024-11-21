"use strict"

import m from "mithril"

function Component() {
	return {
		view: () => (
			<main>
				<h1>Zeal</h1>
				<p>
					I will add contents here in the future for doing something I'm mostly mes
				</p>
			</main>
		)
	}
}

const root = document.body

m.render(root, <Component/>)
