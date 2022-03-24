import React from 'react';

import Head from 'next/head';

import BlogCard from '~/components/Cards/Blog';
import Header from '~/components/Header';
import styles from '~/styles/post.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - Felipe Gouvea</title>
      </Head>

      <Header title="A random post about NextJS" />
      <main>
        <section id={styles.post}>
          <div className={styles.container}>
            <div className={styles.post_container}>
              <div className={styles.postContent}>
                <h1>A random post about NextJS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  m malesuada bibendum arcu. Lacus vestibulum sed arcu non.
                  Dictum fusce ut placerat orci nulla pellentesque
                </p>
                <div className={styles.post_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Feugiat nibh sed pulvinar proin gravida hendrerit. Dui vivamus
                  arcu felis bibendum ut. Id donec ultrices tincidunt arcu non
                  sodales neque. Aenean sed adipiscing diam donec adipiscing. Ac
                  turpis egestas maecenas pharetra convallis posuere morbi leo.
                  Gravida neque convallis a cras semper auctor neque vitae
                  tempus. Pretium fusce id velit ut tortor pretium viverra
                  suspendisse. Donec pretium vulputate sapien nec sagittis
                  aliquam malesuada bibendum arcu. Eget egestas purus viverra
                  accumsan in nisl nisi scelerisque eu. Habitasse platea
                  dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
                  <br />
                  <br />
                  Lacus vestibulum sed arcu non. Dictum fusce ut placerat orci
                  nulla pellentesque dignissim enim. Nec ullamcorper sit amet
                  risus nullam eget. Id interdum velit laoreet id donec. At
                  consectetur lorem donec massa sapien faucibus et molestie.
                  Condimentum id venenatis a condimentum. Lectus arcu bibendum
                  at varius vel pharetra vel turpis. A cras semper auctor neque
                  vitae. Ipsum nunc aliquet bibendum enim facilisis gravida.
                  Rutrum tellus pellentesque eu tincidunt tortor. Pharetra diam
                  sit amet nisl suscipit adipiscing. Morbi tincidunt augue
                  interdum velit euismod. Vel quam elementum pulvinar etiam non
                  quam lacus. Laoreet suspendisse interdum consectetur libero id
                  faucibus nisl tincidunt eget. Dolor sit amet consectetur
                  adipiscing elit pellentesque habitant morbi tristique. Euismod
                  nisi porta lorem mollis aliquam. Turpis egestas pretium aenean
                  pharetra magna. Eleifend quam adipiscing vitae proin sagittis
                  nisl. Nunc aliquet bibendum enim facilisis gravida neque
                  convallis a cras. <br />
                  <br />
                  Nulla posuere sollicitudin aliquam ultrices. Tincidunt
                  lobortis feugiat vivamus at augue eget arcu dictum varius. Id
                  donec ultrices tincidunt arcu non sodales neque. Elementum
                  integer enim neque volutpat ac. In ante metus dictum at tempor
                  commodo ullamcorper. Ut porttitor leo a diam sollicitudin
                  tempor. Est placerat in egestas erat imperdiet sed euismod.
                  Egestas egestas fringilla phasellus faucibus scelerisque
                  eleifend donec pretium. Elit ut aliquam purus sit amet luctus
                  venenatis lectus magna. Posuere sollicitudin aliquam ultrices
                  sagittis orci a scelerisque purus. <br />
                  <br />
                  Non quam lacus suspendisse faucibus. Magna fringilla urna
                  porttitor rhoncus dolor purus non. Aliquet nec ullamcorper sit
                  amet. Phasellus faucibus scelerisque eleifend donec pretium
                  vulputate. Aliquam eleifend mi in nulla posuere sollicitudin
                  aliquam ultrices sagittis. In eu mi bibendum neque egestas.
                  Morbi quis commodo odio aenean sed adipiscing. Feugiat sed
                  lectus vestibulum mattis. Elit ullamcorper dignissim cras
                  tincidunt lobortis feugiat. Aliquam faucibus purus in massa
                  tempor nec. Egestas tellus rutrum tellus pellentesque eu. Et
                  magnis dis parturient montes nascetur ridiculus mus. Faucibus
                  a pellentesque sit amet porttitor eget. Donec massa sapien
                  faucibus et molestie ac feugiat sed lectus. Accumsan sit amet
                  nulla facilisi morbi tempus iaculis urna id. Integer feugiat
                  scelerisque varius morbi enim nunc faucibus. <br />
                  <br />
                  Velit ut tortor pretium viverra suspendisse potenti. Sit amet
                  consectetur adipiscing elit ut aliquam purus sit. Turpis
                  cursus in hac habitasse. Feugiat vivamus at augue eget.
                  Volutpat commodo sed egestas egestas fringilla phasellus
                  faucibus. Id eu nisl nunc mi. Ac auctor augue mauris augue
                  neque gravida in. Pretium nibh ipsum consequat nisl vel
                  pretium lectus. Quisque non tellus orci ac. Nec dui nunc
                  mattis enim ut tellus. Mattis pellentesque id nibh tortor id
                  aliquet lectus proin. Ut sem viverra aliquet eget sit amet.
                </div>
              </div>
              <div className={styles.share}></div>
            </div>

            <div className={styles.topics}>
              <h2>What about these other topics?</h2>
              <div className={styles.blogCards}>
                {/* {Array.from({ length: 4 }, (_, index) => (
                  <BlogCard key={index} />
                ))} */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
