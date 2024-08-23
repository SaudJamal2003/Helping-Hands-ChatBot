import React, { useEffect } from 'react'

function ChatComp({rply}) {

  return (
    <>
    <div className='history'>
        {rply && <div className='replyHistory'>
            <p id='reply'>{rply}</p>
        </div>}
    </div>
    </>
  )
}

export default ChatComp