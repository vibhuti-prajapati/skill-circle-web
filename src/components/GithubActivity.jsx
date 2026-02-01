import { GitHubCalendar } from 'react-github-calendar'

const GithubActivity = ({ username }) => {
  return (
    <div className='w-full'>
      <h4 className='font-semibold mb-2'>GitHub Activity</h4>

      <div className='p-3 rounded-xl bg-base-200 overflow-x-auto'>
        <GitHubCalendar
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          theme={{
            light: ['#22272e', '#1f6f54', '#2ea36e', '#49c98a', '#7ef7b2']
          }}
        />
      </div>
    </div>
  )
}

export default GithubActivity
