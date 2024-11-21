"use strict"

import m from "mithril"

function Component() {
	return {
		view: () => (
			<main>
				<h1>Burrito Index</h1>
				<p>
					TODO in the future I willl
				</p>
			</main>
		)
	}
}

const root = document.body

m.render(root, <Component/>)
