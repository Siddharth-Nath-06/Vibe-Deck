

function QuickLinks() {
    var links = [{t: "Google", l:"https://google.com"},
        {t:"Gmail", l: "https://mail.google.com"},
        {t:"Drive", l: "https://drive.google.com"},
        {t: "X", l: "https://x.com"},
        {t: "Twitch", l:"https://twitch.tv"},
        {t: "YouTube", l: "https://youtube.com"}];

  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4 place-items-center w-1/2 pt-6 place-self-center">
        {links.map(e => {
            return <a href={e.l} className="">
                <img className="size-12 place-self-center mb-2 rounded-md border border-solid"></img>
                <h4>{e.t}</h4>
            </a>
        })}
        {
            (links.length < 8) && <div>
                <img className="size-12 place-self-center mb-2 rounded-md border border-solid"></img>
                <h4>Add</h4>
                </div>
        }
    </div>
  )
}

export default QuickLinks;