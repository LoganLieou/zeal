"use strict"

import m from "mithril"

function Component() {
	return {
		view: () => (
			<main>
				<h1>big JSX</h1>
			</main>
		)
	}
}

const root = document.body

m.render(root, <Component/>)
