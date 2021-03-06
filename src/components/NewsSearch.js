import React from 'react';
import { SearchBox,SearchkitManager, SearchkitProvider,
  Layout, TopBar, LayoutBody, SideBar, LayoutResults,
  ActionBar, ActionBarRow, HitsStats, SortingSelector,
  SelectedFilters, ResetFilters, Hits, NoHits, Pagination,
  HierarchicalMenuFilter, DynamicRangeFilter, RefinementListFilter, MenuFilter,
  GroupedSelectedFilters, Panel } from 'searchkit';
import * as _ from 'lodash';
import { NewsHitsListItem, NewHitsGridItem } from './NewsResults';

var block = require('bem-cn'),
    b = block('news');

const host = 'http://api.datatoknowledge.it/search'
const searchkit = new SearchkitManager(host)

export class NewsSearch extends React.Component {
  constructor(props){
    super(props)
  }



  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout size='l'>
          <LayoutBody>
            <SearchBox
              autofocus={true}
              searchOnChange={true}
              queryFields={['title^5', 'description', 'categories', 'keywords',
                'annotations.name', 'cityName', 'regionName.lower']}
              placeholder='Search News...'/>
          </LayoutBody>
          <LayoutBody>
            <SideBar>
              <MenuFilter
                field='publisher'
                title='Giornali'
                id='publisher'
                size={10}
                translations={{'All':'Tutti i Giornali'}}
                containerComponent={<Panel collapsable={true} defaultCollapsed={false}/>}/>
                  <RefinementListFilter
                    id='locations'
                    title='semanticNames'
                    field='semanticNames.lower'
                    operator='AND'
                    size={10}/>
                <RefinementListFilter
                  id='semanticTags'
                  title='semanticTags'
                  field='semanticTags.lower'
                  operator='AND'
                  size={10}/>
                <RefinementListFilter
                  id='crimes'
                  title='Crimes'
                  field='crimes.lower'
                  operator='AND'
                  size={10}/>
            </SideBar>
            <LayoutResults>
              <ActionBar>
                <ActionBarRow>
                  <HitsStats/>
                </ActionBarRow>
                <ActionBarRow>
                  <SortingSelector options={[
                      {label:'Relevance', field:'_score', order:'desc', defaultOption:true},
                      {label:'Date', field:'date', order: 'desc'}
                    ]}/>
                </ActionBarRow>
                <ActionBarRow>
                  <GroupedSelectedFilters/>
                  <ResetFilters/>
                </ActionBarRow>
              </ActionBar>
              <Hits hitsPerPage={15} gridComponent={NewHitsGridItem} itemComponent={NewsHitsListItem} mod='sk-hits-list'
                highlightFields={['uri', 'title', 'description', 'date', 'focusLocation']}
                 sourceFilter={['uri', 'title', 'description', 'date', 'imageUrl', 'publisher']}/>
              <NoHits translations={{'NoHits.NoResultsFound':'No news found were found for {query}'}}
                   suggestionsField='title'/>
              <Pagination showNumbers={true}/>
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    )
  }
}
