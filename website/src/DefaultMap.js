import React from 'react'
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'

const option = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: '7SvTQxEyXq8la32llvnes21yoVES1JMyBFojtFsWg5U'
    },
    center: [-122.33, 47.6],
    zoom: 12,
    language: 'en-US'
}

function DefaultMap() {
    return (
        <div style={{height: '650px', width: '40%', paddingLeft: '12px'}}>
            <AzureMapsProvider>
                <AzureMap options={option}>
                </AzureMap>
            </AzureMapsProvider>
        </div>
    );
}

export default DefaultMap;
