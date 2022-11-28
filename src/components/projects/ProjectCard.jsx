import React, { useContext, useState } from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { themeContext } from '../../Context';

const pageStyles = {
	dark_list_icon: {
		color: "var(--color-primary)",
		marginTop: "2px",
		flexShrink: 0,
	},
	light_list_icon: {
		color: "var(--color-light-primary)",
		marginTop: "2px",
		flexShrink: 0,
	},
	dark_project_headingh3: {
		color: "var(--color-bg)",
	},
	light_project_headingh3: {
		color: "var(--color-light-bg)",
	},
	dark_project_heading: {
		background: "var(--color-primary)",
	},
	light_project_heading: {
		background: "var(--color-light-primary)",
	},
	dark_project: {
		background: "var(--color-bg-variant)",
		border: "1px solid var(--color-primary)",
	},
	dark_hover_project: {
		background: "transparent",
		border: "1px solid var(--color-primary-variant)",
	},
	light_project: {
		background: "var(--color-light-bg-variant)",
		border: "1px solid var(--color-light-primary)",
	},
	light_hover_project: {
		background: "transparent",
		border: "1px solid var(--color-light-primary)",
	},
};

const ProjectCard = ({ projectTypeNum, projectTypeHeading, workList }) => {
	const initialHoverState = [
		{ id: 0, hover: false },
		{ id: 1, hover: false },
		{ id: 2, hover: false },
	];
	const [isHovering, setIsHovering] = useState(initialHoverState);
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	const handleMouseLeave = (index) => {
		const newState = initialHoverState.map((e) => {
			// 👇️ if id equals index, update hover property
			if (e.id === index) {
				return { ...e, hover: false };
			}
			// 👇️ otherwise return object as is
			return e;
		});
		setIsHovering(newState);
	};

	const handleMouseEnter = (index) => {
		const newState = initialHoverState.map((e) => {
			// 👇️ if id equals index, update hover property
			if (e.id === index) {
				return { ...e, hover: true };
			}
			// 👇️ otherwise return object as is
			return e;
		});
		setIsHovering(newState);
	};
	return (
		<article
			onMouseEnter={() => handleMouseEnter(projectTypeNum)}
			onMouseLeave={() => handleMouseLeave(projectTypeNum)}
			style={
				darkMode
					?
					isHovering[projectTypeNum].hover
						? pageStyles.dark_hover_project
						: pageStyles.dark_project
					: isHovering[projectTypeNum].hover
						? pageStyles.light_hover_project
						: pageStyles.light_project

			}
			className="projects"
		>
			<div
				style={
					darkMode
						? pageStyles.dark_project_heading
						: pageStyles.light_project_heading
				}
				className="projects__heading"
			>
				<h3
					style={
						darkMode
							? pageStyles.dark_project_headingh3
							: pageStyles.light_project_headingh3
					}
				>
					{projectTypeHeading}
				</h3>
			</div>

			<ul className="projects__list">
				{workList.map((e) => {
					return (
						<div key={e}>
							<li >
								<IoCheckmarkDoneSharp
									style={
										darkMode
											? pageStyles.dark_list_icon
											: pageStyles.light_list_icon
									}
								/>
								<p>
									{e}
								</p>
							</li>
						</div>
					)
				})}




				{/* <li>
					<IoCheckmarkDoneSharp
						style={
							darkMode
								? pageStyles.dark_list_icon
								: pageStyles.light_list_icon
						}
					/>
					<p>
						Orbis App: Experienced in rendering data as XY Chart, Bubble
						chart, Stack chart, Pie chart, Donut chart for the
						visualizations of revolution using library like Am charts.
					</p>
				</li>
				<li>
					<IoCheckmarkDoneSharp
						style={
							darkMode
								? pageStyles.dark_list_icon
								: pageStyles.light_list_icon
						}
					/>
					<p>
						Proficient with displaying UI input elements such as drop down
						list with check- box, switch, and radio buttons, parametric to
						the data on the graph.
					</p>
				</li>
				<li>
					<IoCheckmarkDoneSharp
						style={
							darkMode
								? pageStyles.dark_list_icon
								: pageStyles.light_list_icon
						}
					/>
					<p>
						Design and development of “Oxyshare” Application, a not for
						profit tool to rent oxygen concentrators during the Covid
						Pandemic. Users request for Concentrators, donors would approve
						and track devices which also gives effective reuse and maximise
						the availability.
					</p>
				</li>
				<li>
					<IoCheckmarkDoneSharp
						style={
							darkMode
								? pageStyles.dark_list_icon
								: pageStyles.light_list_icon
						}
					/>
					<p>
						Incorporated responsive web app design for the app to seamlessly
						work, irrespective of the size of the screen, orientation and
						platform.
					</p>
				</li>
				<li>
					<IoCheckmarkDoneSharp
						style={
							darkMode
								? pageStyles.dark_list_icon
								: pageStyles.light_list_icon
						}
					/>
					<p>
						Scripbox Web App: Implemented react stepper, radio card, news
						card, blog card, and video card feature components, screen to
						link all unlinked funds in an account of family memebers.
					</p>
				</li>
				<li>
					<IoCheckmarkDoneSharp
						style={
							darkMode
								? pageStyles.dark_list_icon
								: pageStyles.light_list_icon
						}
					/>
					<p>
						Created an online Student Feedback System to reduce paper work.
					</p>
				</li> */}
			</ul>
		</article>
	)
}

export default ProjectCard;