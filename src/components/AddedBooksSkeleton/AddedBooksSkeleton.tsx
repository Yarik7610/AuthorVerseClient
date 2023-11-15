import ContentLoader from 'react-content-loader'

export const AddedBooksSkeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={230}
    viewBox="0 0 300 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="20" y="20" rx="5" ry="5" width="130" height="200" />
    <rect x="170" y="20" rx="5" ry="5" width="125" height="30" />
    <rect x="170" y="60" rx="5" ry="5" width="95" height="30" />
    <rect x="170" y="190" rx="5" ry="5" width="95" height="30" />
  </ContentLoader>
)
