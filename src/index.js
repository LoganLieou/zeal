"use strict"

import m from "mithril"

function Component() {
	return {
		view: () => (
			<main>
				<h1>Burrito Index</h1>
				<p>
					TODO
				</p>
			</main>
		)
	}
}

const root = document.body

m.render(root, <Component/>)
