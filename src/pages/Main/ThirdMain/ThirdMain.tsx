import { ChoiceBtn } from '../../../components/ChoiceBtn/ChoiceBtn'
import { RedirectBtn } from '../../../components/RedirectBtn/RedirectBtn'
import s from './ThirdMain.module.scss'

const choicesExample = [
  'Investigate further',
  'Seek help',
  'Follow the trail',
  'Call for backup',
  'Leave the area'
]

export const ThirdMain = () => {
  return (
    <div className={s.third}>
      <div className={s.left}>
        <h1 className={s.hl}>Unleash Your Creativity, Weave Your Narrative</h1>
        <p className={s.par}>
          Dive into a world where your creativity takes the lead, and your stories are the stars.
          Our platform empowers you to explore uncharted literary realms, allowing you to craft
          intricate narratives and bring characters to life. Whether you're a budding wordsmith or a
          seasoned author, our tools and features cater to your unique storytelling needs. Join a
          community of passionate writers and readers who are dedicated to expanding the boundaries
          of storytelling. It's your canvas, your stories, and your imagination—unleash the
          possibilities.
        </p>
        <div className={s.btnWrap}>
          <RedirectBtn text="See more" to="books" length="50" />
        </div>
      </div>
      <div className={s.right}>
        <h1 className={s.hl}>
          Type your story <span className={s.span}>|</span>
        </h1>
        <p className={s.par}>
          “When I approached the entrance to the basement, I saw bloody stains. The door itself was
          broken. Cold air seeped through the holes...”
        </p>
        <div className={s.choices}>
          {choicesExample.map((choice, id) => (
            <ChoiceBtn key={id} val={choice} />
          ))}
        </div>
      </div>
    </div>
  )
}
