import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Screen } from "../../components/Screen";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../../components/Logo";
import { BlurView } from "expo-blur";

export default function About() {
  return (
    <Screen>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <BlurView intensity={10} style={styles.blurView}>
          <View style={styles.header}>
            <Logo />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>GameTrack</Text>

            <Text style={styles.paragraph}>
              Es una aplicación móvil diseñada para proporcionar una experiencia
              completa y envolvente para los entusiastas de los videojuegos.
              Utilizando la API de Metacritic, GameTrack ofrece a los usuarios
              acceso a una base de datos extensa de juegos, junto con
              información detallada, puntuaciones de críticos y reseñas.
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Funcionalidades Principales</Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Últimos Juegos:</Text> La pantalla
              principal de GameTrack muestra una lista actualizada de los
              últimos juegos. Los usuarios pueden explorar nuevos lanzamientos y
              descubrir qué títulos están recibiendo la atención de los
              críticos. La información sobre cada juego incluye una imagen
              destacada, el título, una breve descripción y la puntuación de los
              críticos.
            </Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Detalles del Juego:</Text> Al
              seleccionar un juego de la lista, los usuarios son dirigidos a una
              página de detalles que proporciona información exhaustiva sobre el
              juego seleccionado. Esto incluye una imagen de portada, la
              puntuación total, el título del juego y una descripción completa.
              Las reseñas y puntuaciones de críticos están organizadas para una
              fácil lectura y comprensión.
            </Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Diseño Intuitivo:</Text> La
              aplicación está diseñada para ser visualmente atractiva y fácil de
              usar. Utiliza un esquema de colores oscuro con texto claro para
              garantizar una buena legibilidad, y los elementos interactivos se
              destacan para una experiencia de usuario fluida.
            </Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Navegación y Animaciones:</Text> La
              navegación entre pantallas es sencilla, con transiciones animadas
              que mejoran la experiencia del usuario. Las tarjetas de juegos en
              la pantalla principal cuentan con animaciones suaves para hacer
              que el desplazamiento y la interacción sean más dinámicos.
            </Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Indicadores de Carga:</Text> Para
              asegurar una experiencia fluida, la aplicación muestra indicadores
              de carga mientras se obtienen los datos. Esto informa a los
              usuarios que la información está siendo cargada y evita una
              experiencia de usuario interrumpida.
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Tecnologías Utilizadas</Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>React Native:</Text> Para construir
              una aplicación móvil nativa y eficiente que funcione en
              dispositivos iOS y Android.
            </Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Expo Router:</Text> Para gestionar
              la navegación entre pantallas de manera sencilla y eficaz.
            </Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Nativewind:</Text>
              Para aplicar estilos utilizando una sintaxis similar a Tailwind
              CSS, lo que facilita la personalización y el diseño responsivo.
            </Text>

            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>API de Metacritic:</Text>
              Para obtener datos actualizados sobre juegos, incluyendo
              puntuaciones y reseñas de críticos.
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.paragraph}>
              <Text style={styles.boldText}>Visión y Misión:</Text> En
              GameTrack, nuestra misión es proporcionar a los jugadores una
              herramienta completa para explorar, descubrir y analizar
              videojuegos. Queremos facilitar la búsqueda de nuevos juegos y
              ayudar a los usuarios a tomar decisiones informadas basadas en
              información confiable y actualizada.
            </Text>
          </View>
        </BlurView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginBottom: 150,
  },
  blurView: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 15,
  },
  header: {
    alignItems: "left",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
});
