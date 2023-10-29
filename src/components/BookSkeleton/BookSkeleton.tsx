import ContentLoader from 'react-content-loader'

export const BookSkeleton = () => (
  <ContentLoader
    speed={2}
    width={170}
    height={300}
    viewBox="0 0 170 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="5" ry="5" width="170" height="255" />
  </ContentLoader>
)
