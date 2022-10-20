const Skill = ({ skillTitle, skillRating }) => (
        <li>
            {skillTitle}
            {
                skillRating ? <span className="votes">{skillRating}</span> : <div />
        }
        </li>
    );



export default Skill;