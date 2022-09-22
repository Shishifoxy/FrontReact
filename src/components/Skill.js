const Skill = ({ skillTitle, skillRating }) => {

        <li>
            {skillTitle} <span className="votes">{skillRating}</span>
        </li>

}

export default Skill;