import React from 'react'

function ChatComp({msg, rply}) {


  return (
    <>
    <div className='history'>
        {msg && <div className='msgHistory'>
            <p id='msg'>{msg}</p>
        </div>}

        {rply && <div className='replyHistory'>
       <p id='reply'>{rply}</p>
       </div>}
    </div>
    </>
  )
}

export default ChatComp