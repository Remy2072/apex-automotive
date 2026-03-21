<script lang="ts">
  import { Button } from '$lib';
  import type { IconComponent } from '$lib/types';

  const { title, text, button, tag, backgroundImage } = $props<{
    title: string;
    text?: string;
    button: {
      label: string;
      href?: string;
      variant?: 'filled' | 'outline';
      icon?: IconComponent;
    };
    tag: string;
    backgroundImage?: string;
  }>();
</script>

<section class="container">
  <div class={backgroundImage ? 'with-image' : 'centered'}>
    <article class="content">
      {#if tag}
        <span>{tag}</span>
      {/if}
      <h2>{title}</h2>
      {#if text}
        <p>{text}</p>
      {/if}

      <Button
        label={button.label}
        href={button.href}
        variant={button.variant}
        contrast={true}
        icon={button.icon}
      />
    </article>

    {#if backgroundImage}
      <div class="image">
        <img src={backgroundImage} alt="Warehouse" />
      </div>
    {/if}
  </div>
</section>

<style>
  section {
    position: relative;
    padding: 6.5rem 0 3.5rem;
    border-radius: 0.5rem;
  }

  h2 {
    font-size: 2rem;
    font-family: var(--sub-font);
    color: var(--color-white);
    font-weight: 300;
    margin-bottom: 1.25rem;

    @media (min-width: 768px) {
      font-size: 3.375rem;
    }

    @media (min-width: 1201px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 3.75rem;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 1.25rem;

    @media (min-width: 1025px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1201px) {
      font-size: 1.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  span {
    position: static;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: var(--sub-font);
    color: var(--color-btn);

    @media (min-width: 1024px) {
      position: absolute;
      top: 2rem;
      right: 2rem;
      margin-bottom: 0;
    }
  }

  .centered {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .centered .content {
    color: var(--color-black);
    max-width: 60%;
  }

  .with-image {
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;
    position: static;

    @media (min-width: 1024px) {
      display: block;
      gap: 0;
      position: relative;
    }
  }

  .with-image .content {
    background: var(--color-black);
    color: var(--color-white);
    max-width: 100%;
    width: 100%;
    width: 100%;
    border-radius: 0.5rem;
    position: relative;
    z-index: 0;
    padding: 11rem 2rem 2rem 2rem;
    margin-top: -10rem;
    
    & * {
      max-width: 100%;
    }
    
    @media (min-width: 500px) {
      padding: 14rem 2rem 2rem 2rem;
    margin-top: -14rem;
    }

    @media (min-width: 768px) {
      padding: 24rem 2rem 2rem 2rem;
      margin-top: -23rem;
    }

    @media (min-width: 1024px) {
      max-width: 85%;
      width: auto;
      padding: 2rem 0rem 2rem 4rem;
      margin: 0;

      & * {
        max-width: 55%;
      }
    }

    @media (min-width: 1024px) {
      h2 {
        font-size: 3rem;
      }

      p {
        font-size: 1.25rem;
      }
    }

    @media (min-width: 1200px) {
      h2 {
        font-size: 3rem;
      }

      p {
        font-size: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      h2 {
        font-size: 3.75rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }

  .with-image .image {
    position: static;
    z-index: 1;
    pointer-events: none;
    width: 100%;
    padding: 2rem 2rem 0 2rem;
    
    & img {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      display: block;
    }
    
    @media (min-width: 1024px) {
      position: absolute;
      width: 50%;
      right: 0%;
      bottom: -15%;
      padding: 0;
    }

    @media (min-width: 1024px) {
      bottom: -10%;
      width: 45%;
    }

    @media (min-width: 1200px) {
      width: 50%;
      bottom: -15%;
    }
  }
</style>
