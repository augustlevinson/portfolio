import React from "react";
import "./Tag.css";

interface TagProps {
	contents: string[];
}

export default function Tag({ contents }: TagProps) {
	return (
		<div className="tags-container">
			{contents.map((content, index) => (
				<div key={index} className="tag">
					{content}
				</div>
			))}
		</div>
	);
}
