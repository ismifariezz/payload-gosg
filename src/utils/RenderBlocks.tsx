import BigCardsServer from '@/blocks/bigCards/Server'
import RectCardsServer from '@/blocks/rectCards/Server'
import { Page } from '@/payload-types'
import React, { Fragment } from 'react'

const blockComponents = {
    rectcards: RectCardsServer,
    bigcards: BigCardsServer,
}

export const RenderBlocks: React.FC<{
    blocks: Page['layout'][0][]
}> = (props) => {
    const { blocks } = props

    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

    if (hasBlocks) {
        return (
            <Fragment>
                {blocks.map((block, index) => {
                    const { blockName, blockType } = block

                    if (blockType && blockType in blockComponents) {
                        const Block = blockComponents[blockType]

                        if (Block) {
                            return (
                                <div className="my-16" key={index}>
                                    <Block id={blockName} {...block} />
                                </div>
                            )
                        }
                    }
                    // This is the missing closing bracket for the `map` function
                    return null
                })}
            </Fragment>
        )
    }

    // You may want to return `null` or some fallback UI if `hasBlocks` is false
    return null
}
