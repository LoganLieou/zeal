"use strict"

import m from "mithril"

function Component() {
	return {
		view: () => (
			<main>
				<h1>Zeal</h1>
				<p>
					I will ad
				</p>
			</main>
		)
	}
}

const root = document.body

m.render(root, <Component/>)
