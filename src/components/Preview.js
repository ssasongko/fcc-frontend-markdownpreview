import React from 'react'
import { marked } from "marked"
import PropTypes from 'prop-types'

const Preview = ({val}) => {
    marked.setOptions({
        breaks: true
    });

    return (
        <div 
            id="preview"
            className="p-3"
            dangerouslySetInnerHTML={{
                __html: marked(val),
            }}>
        </div>
    )
}

Preview.propTypes = {
    val: PropTypes.string.isRequired
}

export default Preview