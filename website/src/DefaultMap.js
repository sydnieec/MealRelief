import React, { memo, useMemo, useState } from 'react'
import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapFeature,
  AzureMapLayerProvider,
  AzureMapsProvider,
} from 'react-azure-maps'
import { AuthenticationType, data, HtmlMarkerOptions } from 'azure-maps-control'

const point1 = new data.Position(-79.403316, 43.667860) // Madison Avenue Pub
const point2 = new data.Position(-79.400552, 43.667906) // Bar Mercurio
const point3 = new data.Position(-79.404339, 43.666913) // Tim Hortons

const points = [point1, point2, point3]

function clusterClicked(e) {
  console.log('clusterClicked', e)
}

const onClick = (e) => {
  console.log('You click on: ', e)
}

function azureHtmlMapMarkerOptions(
  coordinates
) {
  return {
    position: coordinates,
    text: 'My text',
    title: 'Title'
  }
}

const memoizedOptions= {
  textOptions: {
    textField: ['get', 'title'], //Specify the property name that contains the text you want to appear with the symbol.
    offset: [0, 1.2],
  }
}

const eventToMarker= [
  { eventName: 'click', callback: onClick }
]

const renderPoint = (coordinates) => {
  const rendId = Math.random()

  return (
    <AzureMapFeature
      key={rendId}
      id={rendId.toString()}
      type="Point"
      coordinate={coordinates}
      properties={{
        // title: 'Pin',
        icon: 'pin-round-blue'
      }}
    />
  )
}

const MarkersExample = () => {
  const [markers, setMarkers] = useState(points)
  const [markersLayer, setMarkersLayer] = useState(
    'SymbolLayer'
  )
  const [layerOptions, setLayerOptions] = useState(memoizedOptions)


  const option = useMemo(() => {
    return {
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: '7SvTQxEyXq8la32llvnes21yoVES1JMyBFojtFsWg5U'
      },
      center: [-79.401052, 43.667800],
      zoom: 15,
      view: 'Auto'
    }
  }, [])

  const memoizedMarkerRender = useMemo(
    () => markers.map(marker => renderPoint(marker)),
    [markers]
  )


  console.log('MarkerExample RENDER')
  return (
    <>
      <div style={styles.map}>
        <AzureMapsProvider>
          <AzureMap options={option}>
            <AzureMapDataSourceProvider
              events={{
                dataadded: (e) => {
                  console.log('Data on source added', e)
                }
              }}
              id={'markersExample AzureMapDataSourceProvider'}
              options={{ cluster: true, clusterRadius: 2 }}
            >
              <AzureMapLayerProvider
                id={'markersExample AzureMapLayerProvider'}
                options={layerOptions}
                events={{
                  click: clusterClicked,
                  dbclick: clusterClicked
                }}
                lifecycleEvents={{
                  layeradded: () => {
                    console.log('LAYER ADDED TO MAP')
                  }
                }}
                type={markersLayer}
              ></AzureMapLayerProvider>
              {memoizedMarkerRender}
              {/* {memoizedHtmlMarkerRender} */}
            </AzureMapDataSourceProvider>
          </AzureMap>
        </AzureMapsProvider>
      </div>
    </>
  )
}

const styles = {
  map: {
    height: '100vh',
    width: '40%',
    minWidth: 400,
    padding: '0 12px 12px 12px'
  }
}

export default memo(MarkersExample)
