import ContentLoader from 'react-content-loader'

export const TagsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={46}
    viewBox="0 0 250 46"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="24" ry="24" width="90" height="43.5" />
    <rect x="110" y="0" rx="24" ry="24" width="90" height="43.5" />
  </ContentLoader>
)
