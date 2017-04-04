var manifest = {
  emp3: [
    'src/sdk/vendor/tv4.js',
    'src/sdk/core/emp.load.js',
    'src/sdk/core/emp.js',
    'src/sdk/core/emp.util.js',
    'src/sdk/core/emp.util.config.js',
    'src/sdk/core/emp.constant.js',
    'src/sdk/core/emp.elementResizeListener.js',
    'src/sdk/core/emp.classLibrary.Class.js',
    'src/sdk/core/emp.classLibrary.Coordinate.js',
    'src/sdk/core/emp.classLibrary.MapExtent.js',
    'src/sdk/core/emp.util.geojson.js',
    'src/sdk/core/emp.util.kml.js',
    'src/sdk/core/emp.helpers.js',
    'src/sdk/core/emp.utilities.js',
    'src/sdk/core/emp.geoLibrary.js',
    'src/sdk/core/emp.geojsonParser.js',
    'src/sdk/core/emp.errorHandler.js',
    'src/sdk/core/emp.transactionQueue.js',
    'src/sdk/core/emp.editingManager.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.js',
    'src/sdk/core/typeLibrary/utils/emp.typeLibrary.utils.js',
    'src/sdk/core/typeLibrary/utils/milstd/emp.typeLibrary.utils.milstd.AOI.js',
    'src/sdk/core/typeLibrary/utils/milstd/emp.typeLibrary.utils.milstd.Modifiers.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.LatLonCoordinates.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Base.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Transaction.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Overlay.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Feature.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Static.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Status.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Lock.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.LookAt.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.View.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Menu.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Pointer.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Draw.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Edit.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Selection.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.SelectionBox.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.Error.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.WMS.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.WMTS.js',
    'src/sdk/core/typeLibrary/emp.typeLibrary.KmlLayer.js',
    'src/sdk/core/classLibrary/emp.classLibrary.ObjectRelationship.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpObject.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpRenderableObject.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpOverlay.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpStaticContent.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpFeature.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpMapService.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpWMS.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpWMTS.js',
    'src/sdk/core/classLibrary/emp.classLibrary.EmpKmlLayer.js',
    'src/sdk/core/emp.map.js',
    'src/sdk/core/emp.engineTemplate.js',
    'src/sdk/core/environment/emp.environment.js',
    'src/sdk/core/environment/emp.environmentTemplate.js',
    'src/sdk/core/storage/contextMenu/emp.contextMenuStorageManager.js',
    'src/sdk/core/storage/emp.storage.js',
    'src/sdk/core/storage/emp.storage.controller.js',
    'src/sdk/core/storage/emp.storage.search.js',
    'src/sdk/core/storage/emp.storage.query.js',
    'src/sdk/core/storage/emp.storage.get.js',
    'src/sdk/core/storage/emp.storage.repopulate.js',
    'src/sdk/core/editors/emp.editors.Vertex.js',
    'src/sdk/core/editors/emp.editors.Vertices.js',
    'src/sdk/core/editors/emp.editors.EditorBase.js',
    'src/sdk/core/editors/emp.editors.Point.js',
    'src/sdk/core/editors/emp.editors.Path.js',
    'src/sdk/core/editors/emp.editors.Polygon.js',
    'src/sdk/core/editors/emp.editors.MilStdPolygon.js',
    'src/sdk/core/editors/emp.editors.Circle.js',
    'src/sdk/core/editors/emp.editors.Ellipse.js',
    'src/sdk/core/editors/emp.editors.Rectangle.js',
    'src/sdk/core/editors/emp.editors.AxisOfAdvance.js',
    'src/sdk/core/environment/owf/emp.environment.owf.js',
    'src/sdk/core/environment/browser/emp.environment.browser.js',
    'src/sdk/core/environment/browser/emp.environment.browser.mediator.js',
    'src/sdk/core/environment/starfish/emp.environment.starfish.js',
    'src/sdk/core/environment/iwc/emp.environment.iwc.js',
    'src/sdk/core/emp.wms.manager.js',
    'src/sdk/core/api/emp.api.js',
    'src/sdk/core/emp.intents.js',
    'src/sdk/core/emp.prefs.js',
    'src/sdk/core/api/cmapi/cmapi.js',
    'src/sdk/core/api/cmapi/cmapi.channel.names.js',
    'src/sdk/core/api/cmapi/emp.api.cmapi.js',
    'src/sdk/core/api/cmapi/emp.api.cmapi.publisher.intentChannelMap.js',
    'src/sdk/core/api/cmapi/typeLibrary/cmapi.typeLibrary.msgComplete.status.js',
    'src/sdk/core/api/cmapi/typeLibrary/cmapi.typeLibrary.MessageComplete.js',
    'src/sdk/core/api/cmapi/typeLibrary/cmapi.typeLibrary.MessageProgress.js',
    'src/sdk/core/api/cmapi/channel/schema/map.error.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.deselected.batch.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.deselected.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.hide.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.plot.batch.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.plot.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.plot.url.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.selected.batch.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.selected.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.show.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.unplot.batch.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.unplot.js',
    'src/sdk/core/api/cmapi/channel/schema/map.feature.update.js',
    'src/sdk/core/api/cmapi/channel/schema/map.overlay.create.js',
    'src/sdk/core/api/cmapi/channel/schema/map.overlay.hide.js',
    'src/sdk/core/api/cmapi/channel/schema/map.overlay.remove.js',
    'src/sdk/core/api/cmapi/channel/schema/map.overlay.show.js',
    'src/sdk/core/api/cmapi/channel/schema/map.overlay.update.js',
    'src/sdk/core/api/cmapi/channel/schema/map.status.about.js',
    'src/sdk/core/api/cmapi/channel/schema/map.status.format.js',
    'src/sdk/core/api/cmapi/channel/schema/map.status.initialization.js',
    'src/sdk/core/api/cmapi/channel/schema/map.status.request.js',
    'src/sdk/core/api/cmapi/channel/schema/map.status.selected.js',
    'src/sdk/core/api/cmapi/channel/schema/map.status.view.js',
    'src/sdk/core/api/cmapi/channel/schema/map.view.center.bounds.js',
    'src/sdk/core/api/cmapi/channel/schema/map.view.center.feature.js',
    'src/sdk/core/api/cmapi/channel/schema/map.view.center.location.js',
    'src/sdk/core/api/cmapi/channel/schema/map.view.center.overlay.js',
    'src/sdk/core/api/cmapi/channel/schema/map.view.lookat.location.js',
    'src/sdk/core/api/cmapi/channel/schema/map.view.clicked.js',
    'src/sdk/core/api/cmapi/channel/schema/map.view.zoom.js',
    'src/sdk/core/api/cmapi/channel/handler/cmapi2.visibility.get.js',
    'src/sdk/core/api/cmapi/channel/handler/cmapi2.map.config.js',
    'src/sdk/core/api/cmapi/channel/handler/cmapi2.map.freehand.start.js',
    'src/sdk/core/api/cmapi/channel/handler/cmapi2.map.freehand.stop.js',
    'src/sdk/core/api/cmapi/channel/handler/map.convert.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.clear.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.deselected.batch.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.deselected.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.draw.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.edit.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.hide.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.plot.batch.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.plot.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.plot.url.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.selected.batch.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.selected.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.show.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.unplot.batch.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.unplot.js',
    'src/sdk/core/api/cmapi/channel/handler/map.feature.update.js',
    'src/sdk/core/api/cmapi/channel/handler/map.get.js',
    'src/sdk/core/api/cmapi/channel/handler/map.message.cancel.js',
    'src/sdk/core/api/cmapi/channel/handler/map.message.complete.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.clear.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.cluster.activate.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.cluster.deactivate.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.cluster.remove.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.cluster.set.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.create.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.hide.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.remove.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.show.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.style.js',
    'src/sdk/core/api/cmapi/channel/handler/map.overlay.update.js',
    'src/sdk/core/api/cmapi/channel/handler/map.status.request.js',
    'src/sdk/core/api/cmapi/channel/handler/map.swap.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.lock.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.center.bounds.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.center.feature.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.center.location.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.center.overlay.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.coordinatesystem.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.lookat.location.js',
    'src/sdk/core/api/cmapi/channel/handler/map.view.zoom.js',
    'src/sdk/core/api/cmapi/channel/publisher/cmapi2.map.feature.event.add.js',
    'src/sdk/core/api/cmapi/channel/publisher/cmapi2.map.feature.event.remove.js',
    'src/sdk/core/api/cmapi/channel/publisher/cmapi2.map.feature.event.update.js',
    'src/sdk/core/api/cmapi/channel/publisher/cmapi2.map.freehand.linedraw.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.error.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.feature.clicked.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.feature.deselected.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.feature.plot.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.feature.plot.url.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.feature.selected.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.feature.unplot.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.progress.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.overlay.remove.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.status.about.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.status.coordinatesystem.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.status.format.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.status.initialization.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.status.screenshot.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.status.selected.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.status.view.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.view.area.selected.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.view.clicked.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/draw.begin.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/edit.begin.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/feature.add.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/feature.hide.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/feature.remove.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/feature.selected.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/feature.show.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/feature.update.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/map.convert.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/map.get.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/overlay.create.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/overlay.hide.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/overlay.remove.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/overlay.show.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/overlay.update.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/view.set.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/visibility.get.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/visibility.set.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/mapservice.add.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.complete/mapservice.remove.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.progress/draw.update.js',
    'src/sdk/core/api/cmapi/channel/publisher/map.message.progress/edit.update.js',
    'src/sdk/core/api/cmapi/channel/support/cmapi.generic.feature.remove.js',
    'src/sdk/core/api/cpcev1/emp.api.core.js',
    'src/sdk/core/api/cpcev1/emp.api.core.fixture.js',
    'src/sdk/core/api/cpcev1/emp.api.core.handler.js',
    'src/sdk/core/api/cpcev1/emp.api.core.publish.js',
    'src/sdk/core/emp.instanceManager.js',
    'src/sdk/core/emp.ui.js',
    'src/sdk/core/emp.recorder.js',
    'src/sdk/api/org.cmapi.primitives.js',
    'src/sdk/api/utils/emp3.utils.geoLibrary.js',
    'src/sdk/api/emp3.api.js',
    'src/sdk/api/emp3.api.enums.js',
    'src/sdk/api/emp3.api.constants.js',
    'src/sdk/api/emp3.api.Container.js',
    'src/sdk/api/emp3.api.CameraManager.js',
    'src/sdk/api/emp3.api.LookAtManager.js',
    'src/sdk/api/emp3.api.Transaction.js',
    'src/sdk/api/emp3.api.Camera.js',
    'src/sdk/api/emp3.api.LookAt.js',
    'src/sdk/api/emp3.api.Map.js',
    'src/sdk/api/emp3.api.Overlay.js',
    'src/sdk/api/emp3.api.Layer.js',
    'src/sdk/api/emp3.api.MapService.js',
    'src/sdk/api/emp3.api.WMS.js',
    'src/sdk/api/emp3.api.WMTS.js',
    'src/sdk/api/emp3.api.KMLLayer.js',
    'src/sdk/api/emp3.api.Feature.js',
    'src/sdk/api/emp3.api.AirControlMeasure.js',
    'src/sdk/api/emp3.api.Point.js',
    'src/sdk/api/emp3.api.Line.js',
    'src/sdk/api/emp3.api.Polygon.js',
    'src/sdk/api/emp3.api.Circle.js',
    'src/sdk/api/emp3.api.Rectangle.js',
    'src/sdk/api/emp3.api.Square.js',
    'src/sdk/api/emp3.api.Text.js',
    'src/sdk/api/emp3.api.Ellipse.js',
    'src/sdk/api/emp3.api.Path.js',
    'src/sdk/api/emp3.api.KML.js',
    'src/sdk/api/emp3.api.GeoJSON.js',
    'src/sdk/api/emp3.api.GeoPosition.js',
    'src/sdk/api/emp3.api.MilStdSymbol.js',
    'src/sdk/api/emp3.api.MessageHandler.js',
    'src/sdk/api/emp3.api.global.js',
    'src/sdk/api/messages/emp3.api.MessageFactory.js',
    'src/sdk/api/messages/emp3.api.Message.js',
    'src/sdk/api/messages/map.feature.plot.Message.js',
    'src/sdk/api/messages/map.feature.plot.url.Message.js',
    'src/sdk/api/messages/map.feature.unplot.Message.js',
    'src/sdk/api/messages/map.feature.draw.Message.js',
    'src/sdk/api/messages/map.feature.update.Message.js',
    'src/sdk/api/messages/map.feature.selected.Message.js',
    'src/sdk/api/messages/map.feature.deselected.Message.js',
    'src/sdk/api/messages/map.message.cancel.Message.js',
    'src/sdk/api/messages/map.message.complete.Message.js',
    'src/sdk/api/messages/map.overlay.cluster.set.Message.js',
    'src/sdk/api/messages/map.overlay.create.Message.js',
    'src/sdk/api/messages/map.overlay.update.Message.js',
    'src/sdk/api/messages/map.overlay.remove.Message.js',
    'src/sdk/api/messages/map.overlay.show.Message.js',
    'src/sdk/api/messages/map.overlay.hide.Message.js',
    'src/sdk/api/messages/map.swap.Message.js',
    'src/sdk/api/messages/cmapi2.map.config.Message.js',
    'src/sdk/api/messages/cmapi2.map.freehand.start.Message.js',
    'src/sdk/api/messages/cmapi2.map.freehand.stop.Message.js',
    'src/sdk/api/messages/cmapi2.visibility.get.Message.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBrokerFactory.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.plotFeatureTransactionComplete.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.handleUnplotFeatureTransactionComplete.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.handleMapGet.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.handleOverlayTransactionComplete.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.handleCreateOverlayTransactionComplete.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.handleRemoveOverlayTransactionComplete.js',
    'src/sdk/api/responseBrokers/emp3.api.ResponseBroker.handleFeaturePlotUrl.js',
    'src/sdk/api/events/emp3.api.events.Event.js',
    'src/sdk/api/events/emp3.api.events.UserInteractionEvent.js',
    'src/sdk/api/events/emp3.api.events.MapUserInteractionEvent.js',
    'src/sdk/api/events/emp3.api.events.MapCursorMoveEvent.js',
    'src/sdk/api/events/emp3.api.events.MapFreehandEvent.js',
    'src/sdk/api/events/emp3.api.events.FeatureUserInteractionEvent.js',
    'src/sdk/api/events/emp3.api.events.CameraEvent.js',
    'src/sdk/api/events/emp3.api.events.MapViewChangeEvent.js',
    'src/sdk/api/events/emp3.api.events.ContainerEvent.js',
    'src/sdk/api/events/emp3.api.events.MapStateChangeEvent.js',
    'src/sdk/api/events/emp3.api.events.FeatureEvent.js',
    'src/sdk/api/events/emp3.api.events.FeatureAddedEvent.js',
    'src/sdk/api/events/emp3.api.events.FeatureDeletedEvent.js',
    'src/sdk/api/events/emp3.api.events.FeatureDrawEvent.js',
    'src/sdk/api/events/emp3.api.events.FeatureEditEvent.js',
    'src/sdk/api/events/emp3.api.events.OverlayUpdatedEvent.js',
    'src/sdk/api/events/emp3.api.events.MapFeatureAddedEvent.js',
    'src/sdk/api/events/emp3.api.events.MapFeatureRemovedEvent.js',
    'src/sdk/api/events/emp3.api.events.MapFeatureUpdatedEvent.js',
    'src/sdk/api/events/emp3.api.events.VisibilityEvent.js',
    'src/sdk/api/environment/emp3.api.createEnvironmentTemplate.js',
    'src/sdk/api/environment/emp3.environment.owf.js',
    'src/sdk/api/environment/emp3.environment.browser.js',
    'src/sdk/api/environment/emp3.environment.starfish.js',
    'src/sdk/api/environment/emp3.environment.iwc.js'
  ],
  leaflet: [
    "src/mapengine/leaflet/js/lib/leaflet-src.js",
    "src/mapengine/leaflet/js/lib/KML.js",

    "src/mapengine/leaflet/js/lib/leaflet.markercluster-src.js",

    "src/mapengine/leaflet/js/utils/emp.typeLibrary.utils.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.js",
    "src/mapengine/leaflet/js/lib/leaflet-eng.leaflet.extensions.js",
    "src/mapengine/leaflet/js/lib/KML.extensions.js",
    "src/mapengine/leaflet/js/lib/leaflet-eng.markerCluster.extensions.js",
    "src/mapengine/leaflet/js/lib/leaflet-eng.leaflet.extension.Ellipse.js",

    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.selectionManager.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.empObject.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.DisplayableObject.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.EmpClusterGroup.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.overlay.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.wms.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.EmpBoundary.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.empObject.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.DisplayableObject.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.overlay.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.milstd.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.kml.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.geojson.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.airspace.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.image.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.AOI.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.wms.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.milstdmodifiers.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.text.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.GeoRectangle.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.GeoSquare.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.GeoCircle.js",
    "src/mapengine/leaflet/js/typeLibrary/leaflet-eng.typeLibrary.feature.GeoEllipse.js",

    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.attributes.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.cylinder.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.polygon.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.curtain.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.orbit.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.route.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.track.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.radarc.js",
    "src/mapengine/leaflet/js/typeLibrary/airspace/leaflet-eng.typeLibrary.airspace.polyarc.js",

    "src/mapengine/leaflet/js/utils/leaflet-eng.utils.js",
    "src/mapengine/leaflet/js/utils/leaflet-eng.utils.geoJson.js",
    "src/mapengine/leaflet/js/utils/leaflet-eng.utils.milstd.js",
    "src/mapengine/leaflet/js/utils/leaflet-eng.utils.kml.js",
    "src/mapengine/leaflet/js/utils/leaflet-eng.utils.airspace.js",
    "src/mapengine/leaflet/js/utils/leaflet-eng.utils.oval.js",
    "src/mapengine/leaflet/js/utils/leaflet-eng-renderer-PointConverter.js",

    "src/mapengine/leaflet/js/editor/leaflet-eng.editor.controlpoint.js",
    "src/mapengine/leaflet/js/editor/leaflet-eng.editor.AbstractEditor.js",
    "src/mapengine/leaflet/js/editor/leaflet-eng.editor.GeoJson.js",
    "src/mapengine/leaflet/js/editor/leaflet-eng.editor.MilStd.js",
    "src/mapengine/leaflet/js/editor/leaflet-eng.editor.AOI.js",
    "src/mapengine/leaflet/js/editor/leaflet-eng.editor.KML.js",
    "src/mapengine/leaflet/js/editor/leaflet-eng.editor.airspace.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dcautoshape.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dccircularautoshape.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dccircularrangefan.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dcline.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dcpolygon.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dcrectparamautoshape.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dcroute.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dcsectorparamautoshape.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dcsuperautoshape.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dctwopointline.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.dctwopointrectas.js",
    "src/mapengine/leaflet/js/editor/milstd/leaflet-eng.editor.milstd.singlepoint.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.curtain.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.polygon.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.cylinder.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.orbit.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.route.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.track.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.radarc.js",
    "src/mapengine/leaflet/js/editor/airspace/leaflet-eng.editor.airspace.polyarc.js",

    "src/mapengine/leaflet/js/leaflet-map-engine.debug.js"
  ],
  cesium: [
    "src/mapengine/cesium/js/lib/cesium/Cesium.js",
    "src/mapengine/cesium/js/lib/cesium/cesiumExtensions/cesium.Cartographic.extension.js",
    "src/mapengine/cesium/js/utils/cesiumEngine-engine-js-utils.debug.js",
    "src/mapengine/cesium/js/utils/cesiumEngine-geojson-converter.debug.js",
    "src/mapengine/cesium/js/utils/cesiumEngine-geo-library.debug.js",
    "src/mapengine/cesium/js/utils/mil-symbology-renderer.debug.js",
    "src/mapengine/cesium/js/lib/cesium/coreTypeLibrary/coreTypeLibrary.js",
    "src/mapengine/cesium/js/lib/cesium/coreTypeLibrary/utils/milstd/emp.typeLibrary.utils.milstd.AOI.js",
    "src/mapengine/cesium/js/lib/cesium/coreTypeLibrary/utils/milstd/emp.typeLibrary.utils.milstd.Modifiers.js",
    "src/mapengine/cesium/js/lib/cesium/coreTypeLibrary/utils/milstd/emp.typeLibrary.utils.milstd.js",
    "src/mapengine/cesium/js/lib/cesium/providers/TigrTerrainProvider.js",
    "src/mapengine/cesium/js/lib/cesium/providers/GeoserverTerrainProvider.js",
    "src/mapengine/cesium/js/lib/cesium/providers/ArcgisBilTerrainProvider.js",
    "src/mapengine/cesium/js/lib/cesium/providers/wcs/WCSTerrainProvider.js",
    "src/mapengine/cesium/js/lib/cesium/parsers/GeotiffParser.js",
    "src/mapengine/cesium/js/lib/cesium/editors/drawHelper/DrawHelper.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/commons/CONSTANTS.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/AirspacePoint.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/ALTITUDE_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/ALTITUDE_UNITS.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/MOUSE_EVENT_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/PLAY_DIRECTION.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/PLAY_MODE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/PREFERENCE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/TAIS_DATA_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/VISIBILITY_STORES.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/WIDTH_UNITS.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/ALTITUDE_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/AIRSPACE_LEVEL.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/AIRSPACE_SHAPE_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/AIRSPACE_STATE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/AIRSPACE_TURN_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/AIRSPACE_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/AIRSPACE_USAGE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/COLOR.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/CONFLICT_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/enums/LINK_TYPE.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/AirspaceInit.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/controllers/MapCntrl.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/controllers/MapCntrlBase.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/controllers/MapViewCntrl.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/controllers/AirspaceMapCntrl.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/tessellate/Tessellate.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/views/MapModel.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/views/MapViewBase.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/views/AirspaceMapView.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/views/MapView.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/handlers/AirspaceDrawHandler.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/handlers/MouseHandler.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/workers/workerLoader.js",
    "src/mapengine/cesium/js/lib/cesium/airspaces/workers/tessellate/TriangulatePolygon.js",
    "src/mapengine/cesium/js/utils/CesiumConstants.js",
    "src/mapengine/cesium/js/lib/cesium/EmpCesium.js",
    "src/mapengine/cesium/js/lib/cesium/editors/EditorController.js",
    "src/mapengine/cesium/js/lib/cesium/ThirdParty/cesium-navigation/viewerCesiumNavigationMixin.js",
    "src/mapengine/cesium/js/cesium-map-engine.debug.js"
  ],
  worldwind: [
    "src/mapengine/worldwind/worldwind-map-engine.js",
    "src/mapengine/worldwind/EMPWorldWind.js",
    "src/mapengine/worldwind/data/EMPWorldWind.data.js",
    "src/mapengine/worldwind/data/EMPWorldWind.data.EmpLayer.js",
    "src/mapengine/worldwind/data/EMPWorldWind.data.EmpWMSLayer.js",
    "src/mapengine/worldwind/data/EMPWorldWind.data.EmpFeature.js",
    "src/mapengine/worldwind/utils/EMPWorldWind.constants.js",
    "src/mapengine/worldwind/utils/EMPWorldWind.utils.js",
    "src/mapengine/worldwind/controllers/editors/EMPWorldWind.editors.primitiveBuilders.js",
    "src/mapengine/worldwind/controllers/editors/EMPWorldWind.editors.EditorController.js",
    "src/mapengine/worldwind/controllers/eventHandlers/EMPWorldWind.eventHandlers.js",
    "src/mapengine/worldwind/controllers/eventHandlers/EMPWorldWind.eventHandlers.mouse.js",
    "src/mapengine/worldwind/controllers/eventHandlers/EMPWorldWind.eventHandlers.touch.js",
    "src/mapengine/worldwind/controllers/eventHandlers/EMPWorldWind.eventHandlers.drag.js",
    "src/mapengine/worldwind/controllers/eventHandlers/EMPWorldWind.eventHandlers.pointer.js"
  ]
};

module.exports = manifest;
