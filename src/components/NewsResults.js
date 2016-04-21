import * as React from 'react';
import * as _ from 'lodash';
import moment from 'moment';

export const NewHitsGridItem = (props)=> {
  const {bemBlocks, result} = props
  const source = _.extend({}, result._source, result.highlight)
  return (
    <div className={bemBlocks.item().mix(bemBlocks.container('item'))} data-qa='hit'>
      <a href={source.uri} target='_blank'>
        <img data-qa='poster' className={bemBlocks.item('poster')} src={source.imageUrl} width='70' height='40'/>
        <div data-qa='title' className={bemBlocks.item('title')} dangerouslySetInnerHTML={{__html:source.title}}>
        </div>
      </a>
    </div>
  )
}

export const NewsHitsListItem = (props)=> {
  const {bemBlocks, result} = props
  const source = _.extend({}, result._source, result.highlight)

  return (
    <div className={bemBlocks.item().mix(bemBlocks.container('item'))} data-qa='hit'>
      <div className={bemBlocks.item('details')}>
        <a href={source.uri} target='_blank'><h2 className={bemBlocks.item('title')} dangerouslySetInnerHTML={{__html:source.title}}></h2></a>
        <h3 className={bemBlocks.item('subtitle')}>Pubblicata il {moment(source.date).format('DD/MM/YYYY')} | {source.publisher}</h3>
        <div className={bemBlocks.item('text')} dangerouslySetInnerHTML={{__html:source.description}}></div>
      </div>
    </div>
  )
}
