import PostMetaTitle from './PostMetaTitle'
import PostAuthor from './PostAuthor'

export default function InfoPost({
	category,
	title,
	date,
	excerpt,
	authorAvatar,
	authorName,
	authorJob,
}) {
	return (
		<>
			<PostMetaTitle
				category={category}
				title={title}
				date={date}
				excerpt={excerpt}
			/>
			<PostAuthor
				authorAvatar={authorAvatar}
				authorName={authorName}
				authorJob={authorJob}
			/>
		</>
	)
}
